import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../../constants';
import { useUserContext } from '../../context/UserContext';
import { useCreateMessageMutation } from '../../graphql/generated/schema';

type MessageInputProps = {
  channelId: string;
};

export const MessageInput = ({ channelId }: MessageInputProps) => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const [disabled, setDisabled] = useState(true);
  const [messageContent, setMessageContent] = useState('');
  const [createMessage] = useCreateMessageMutation();

  useEffect(() => {
    setDisabled(user === null);
  }, [user]);

  const handleJoinConfirm = () => {
    if (
      window.confirm(`대화를 하려면 닉네임이 필요합니다.\n로그인 하겠습니까?`)
    ) {
      navigate(`${PAGE.join}?returnUrl=${window.location.href}`);
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        if (channelId) {
          createMessage({
            variables: { channelId, content: messageContent },
          });
        }
        setMessageContent('');
      }}>
      <div className="input-group">
        <input
          className="input input-bordered w-full focus:outline-none"
          type="text"
          placeholder="Message"
          maxLength={400}
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          readOnly={disabled}
          required
          {...(disabled && { onClick: handleJoinConfirm })}
        />
        <button className="btn" type="submit" disabled={disabled}>
          Send
        </button>
      </div>
    </form>
  );
};
