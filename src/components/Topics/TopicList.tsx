import { useEffect } from 'react';
import { GetTopicsQuery } from '../../graphql/generated/schema';
import { TopicItem } from './TopicItem';

type TopicListProps = {
  topics: NonNullable<GetTopicsQuery['topics']>;
  handleClick: (id: string) => void;
  subscribeToNewTopics: (() => () => void) | null;
};

export const TopicList = ({
  topics,
  handleClick,
  subscribeToNewTopics,
}: TopicListProps) => {
  useEffect(() => {
    if (!subscribeToNewTopics) {
      return undefined;
    }
    const unsubscribe = subscribeToNewTopics();
    return () => unsubscribe();
  }, [subscribeToNewTopics]);

  return (
    <div className="w-full">
      {topics &&
        topics.map(
          ({ id, title, description, start, end, active, progress }: any) => (
            <TopicItem
              key={id}
              title={title}
              description={description}
              start={start}
              end={end}
              active={active}
              progress={progress}
              handleClick={() => handleClick(id)}
            />
          )
        )}
    </div>
  );
};
