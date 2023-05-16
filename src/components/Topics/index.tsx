import { useCallback, useEffect } from 'react';
import { usePageVisibility } from 'react-page-visibility';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../../constants';
import {
  OnTopicProcessingDocument,
  OnTopicProcessingSubscription,
  OnTopicProcessingSubscriptionVariables,
  TopicFragment,
  useGetTopicsQuery,
  useJoinChannelMutation,
} from '../../graphql/generated/schema';
import { Spinner } from '../Common/Spinner';
import { TopicList } from './TopicList';

export const Topics = () => {
  const navigate = useNavigate();
  const [joinChannel] = useJoinChannelMutation();
  const {
    subscribeToMore,
    loading,
    data: { topics } = {},
    refetch,
  } = useGetTopicsQuery({
    fetchPolicy: 'network-only',
    variables: { afterMinutes: 360 },
  });

  const subscribeToNewTopics = useCallback(
    () =>
      subscribeToMore<
        OnTopicProcessingSubscription,
        OnTopicProcessingSubscriptionVariables
      >({
        document: OnTopicProcessingDocument,
        variables: {},
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data || !prev.topics) {
            return prev;
          }

          return {
            topics: subscriptionData.data.onTopicProcessing
              ?.topics as TopicFragment[],
          };
        },
      }),
    [subscribeToMore]
  );

  const isVisible = usePageVisibility();
  useEffect(() => {
    if (isVisible) {
      refetch();
    }
  }, [isVisible, refetch]);

  const handleClick = async (id: string) => {
    const result = await joinChannel({ variables: { topicId: id } });
    if (result.data) {
      const channelId = result.data.joinChannel.channel?.id;
      navigate(`${PAGE.channel}/${channelId}`);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <>
      <TopicList
        topics={topics ? topics : []}
        handleClick={handleClick}
        subscribeToNewTopics={topics ? subscribeToNewTopics : null}
      />
    </>
  );
};
