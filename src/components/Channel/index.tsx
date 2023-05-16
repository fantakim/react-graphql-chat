import { useVh } from '@framini/use-vh';
import { useCallback, useEffect } from 'react';
import { usePageVisibility } from 'react-page-visibility';
import {
  MessageFragment,
  OnMessageProcessingDocument,
  OnMessageProcessingSubscription,
  OnMessageProcessingSubscriptionVariables,
  useGetChannelByIdQuery,
} from '../../graphql/generated/schema';
import { MetaTag } from '../Common/MetaTag';
import { ChannelTop } from './ChannelTop';
import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';

type ChannelProps = {
  channelId: string;
};

export const Channel = ({ channelId }: ChannelProps) => {
  const fullVh = useVh();

  const {
    subscribeToMore,
    data: { channelById } = {},
    refetch,
  } = useGetChannelByIdQuery({
    fetchPolicy: 'cache-and-network',
    variables: { channelId: channelId },
  });

  const subscribeToNewMessages = useCallback(
    () =>
      subscribeToMore<
        OnMessageProcessingSubscription,
        OnMessageProcessingSubscriptionVariables
      >({
        document: OnMessageProcessingDocument,
        variables: { channelId },
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data || !prev.channelById) {
            return prev;
          }
          return {
            ...prev,
            channelById: {
              ...prev.channelById,
              messages: [
                ...(prev.channelById.messages as MessageFragment[]),
                subscriptionData.data.onMessageProcessing
                  ?.message as MessageFragment,
              ],
            },
          };
        },
      }),
    [channelId, subscribeToMore]
  );

  const isVisible = usePageVisibility();
  useEffect(() => {
    if (isVisible) {
      refetch();
    }
  }, [isVisible, refetch]);

  return (
    <>
      <MetaTag title={`Loom chat - ` + channelById?.name!} />
      <div
        className="flex-1 justify-between flex flex-col h-screen"
        style={{
          height: `${fullVh}px`,
        }}>
        <ChannelTop name={channelById?.name} />
        <div
          id="messages"
          className="flex flex-col h-full space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          <MessageList
            messages={channelById ? channelById.messages : []}
            subscribeToNewMessages={channelId ? subscribeToNewMessages : null}
          />
        </div>
        <div className="border-t-2 border-base-200 px-1 pt-2 mb-2 sm:mb-0">
          <MessageInput channelId={channelId} />
        </div>
      </div>
    </>
  );
};
