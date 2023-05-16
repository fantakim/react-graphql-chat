import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../../constants';
import { useUserContext } from '../../context/UserContext';
import { UserRole } from '../../graphql/generated/schema';

export const Avatar = () => {
  const navigate = useNavigate();
  const { user, signOut } = useUserContext();

  const handleLogout = () => {
    signOut();
    navigate(PAGE.root, { replace: true });
  };

  const NotLoggedIn = () => {
    return (
      <>
        <label tabIndex={0} className="">
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <UserCircleIcon />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <p>대화를 하려면 닉네임이 필요합니다.</p>
          </li>
          <div className="divider mt-0 mb-0"></div>
          <li>
            <a href={PAGE.join}>닉네임 만들기</a>
          </li>
          <li>
            <a href={PAGE.signUp}>회원 가입</a>
          </li>
        </ul>
      </>
    );
  };

  const GuestLoggedIn = () => {
    return (
      <>
        <label tabIndex={0} className="">
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <UserCircleIcon />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <div className="card-body">
              <h4 className="card-title">{user!.nickName}</h4>
            </div>
          </li>
          <div className="divider mt-0 mb-0"></div>
          <li>
            <a href={PAGE.joinAsMember}>회원 되기</a>
          </li>
          <li>
            <button onClick={handleLogout}>로그아웃</button>
          </li>
        </ul>
      </>
    );
  };

  const MemberLoggedIn = () => {
    return (
      <>
        <label tabIndex={0} className="">
          <div className="relative w-10 h-10 overflow-hidden rounded-full">
            <UserCircleIcon />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <div className="card-body">
              <h4 className="card-title">{user!.nickName}</h4>
            </div>
          </li>
          <div className="divider mt-0 mb-0"></div>
          <li>
            <button onClick={handleLogout}>로그아웃</button>
          </li>
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="dropdown dropdown-end ml-4">
        {!user && (
          <>
            <NotLoggedIn />
          </>
        )}
        {user?.role === UserRole.Guest && (
          <>
            <GuestLoggedIn />
          </>
        )}
        {user?.role === UserRole.Member && (
          <>
            <MemberLoggedIn />
          </>
        )}
      </div>
    </>
  );
};
