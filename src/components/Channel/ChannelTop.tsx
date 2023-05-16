import ChevronLeftIcon from '@heroicons/react/24/outline/ChevronLeftIcon';
import ShareIcon from '@heroicons/react/24/outline/ShareIcon';
import { useNavigate } from 'react-router-dom';
import useCopy from 'use-copy';
import { PAGE } from '../../constants';
import { ChannelFragment } from '../../graphql/generated/schema';
import Utils from '../../utils';
import { ThemeSwitcher } from '../Layout/ThemeSwitcher';
import { Avatar } from '../User/Avatar';

type ChannelProps = {
  name: ChannelFragment['name'];
};

export const ChannelTop = ({ name }: ChannelProps) => {
  const navigate = useNavigate();
  const [copied, copy, setCopied] = useCopy(window.location.href);

  const handleClick = () => {
    navigate(PAGE.root, { replace: true });
  };

  return (
    <>
      {copied && (
        <>
          <div className="toast toast-top toast-end z-20">
            <div className="alert alert-success">
              <div>
                <span>주소가 복사되었습니다</span>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="navbar flex justify-between bg-base-100 z-10 shadow-md">
        <div>
          <button className="w-7 h-7" onClick={handleClick}>
            <ChevronLeftIcon className="font-bold" />
          </button>
        </div>
        <div className="dropdown">
          <label
            tabIndex={0}
            className="text-lg font-semibold tracking-[0.16px]">
            {name}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button
                onClick={() => {
                  copy();
                  Utils.invokeBlur();
                  setTimeout(() => {
                    setCopied(false);
                  }, 3000);
                }}>
                <ShareIcon className="w-4" />이 채널 공유
              </button>
            </li>
          </ul>
        </div>
        <div className="order-last">
          <ThemeSwitcher />
          <Avatar />
        </div>
      </div>
    </>
  );
};
