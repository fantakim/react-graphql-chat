import TimeAgo from 'javascript-time-ago';
import ko from 'javascript-time-ago/locale/ko.json';
import ReactTimeAgo from 'react-time-ago';
import { MessageFragment } from '../../graphql/generated/schema';
import Utils from '../../utils';

type MessageItemProps = {
  content: MessageFragment['content'];
  timestamp: number;
  displayName: MessageFragment['displayName'];
  isCurrentUser: MessageFragment['isCurrentUser'];
};

export const MessageItem = ({
  content,
  timestamp,
  displayName,
  isCurrentUser,
}: MessageItemProps) => {
  TimeAgo.addLocale(ko);

  return (
    <>
      <div className={`chat mb-4 ${isCurrentUser ? 'chat-end' : 'chat-start'}`}>
        <div className="chat-image avatar">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span>{Utils.getInitials(displayName || '')}</span>
            </div>
          </div>
        </div>
        <div className="chat-header mb-1">
          <span>{displayName}</span>
          &nbsp;
          <ReactTimeAgo
            date={timestamp}
            locale={'ko-KR'}
            className="text-xs opacity-50"
          />
        </div>
        <div className="chat-bubble break-all">{content}</div>
      </div>
    </>
  );
};
