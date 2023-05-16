import { NavLink } from 'react-router-dom';
import { PAGE } from '../../constants';

export const LeftSidebar = () => {
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
        <ul className="menu w-80 bg-base-100 text-base-content">
          <li className="font-semibold text-xl">
            <label
              onClick={() => {
                document.getElementById('left-sidebar-drawer')!.click();
              }}>
              <img className="mask w-10" src="/logo192.png" alt="Loom Logo" />
              Loom
            </label>
          </li>
          <li>
            <NavLink to={PAGE.root}>토픽</NavLink>
          </li>
          <li>
            <NavLink to={PAGE.signIn}>로그인</NavLink>
          </li>
          <li>
            <NavLink to={PAGE.whatThe}>What the loom</NavLink>
          </li>
          <li>
            <NavLink to={PAGE.privacyPolicy}>Privacy Policy</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
