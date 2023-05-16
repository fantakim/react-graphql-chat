import { useEffect, useRef } from 'react';
import { GetMessagesQuery } from '../../graphql/generated/schema';
import { MessageItem } from './MessageItem';

type MessageListProps = {
  messages: NonNullable<GetMessagesQuery['messages']>['nodes'];
  subscribeToNewMessages: (() => () => void) | null;
};

export const MessageList = ({
  messages,
  subscribeToNewMessages,
}: MessageListProps) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!subscribeToNewMessages) {
      return undefined;
    }
    const unsubscribe = subscribeToNewMessages();
    return () => unsubscribe();
  }, [subscribeToNewMessages]);

  return (
    <div ref={messagesEndRef} className="w-full">
      {messages &&
        messages.map(
          ({ id, content, timestamp, displayName, isCurrentUser }: any) => (
            <MessageItem
              key={id}
              content={content}
              timestamp={new Date(timestamp).getTime()}
              displayName={displayName}
              isCurrentUser={isCurrentUser}
            />
          )
        )}
    </div>
  );
};
