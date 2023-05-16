import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import { Avatar } from '../User/Avatar';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header = () => {
  return (
    <>
      <div className="navbar flex justify-between bg-base-100 z-10 shadow-md">
        <div>
          <label
            htmlFor="left-sidebar-drawer"
            className="btn btn-primary drawer-button lg:hidden">
            <Bars3Icon className="h-5 inline-block w-5" />
          </label>
          <h1 className="text-2xl font-semibold ml-2 sm:hidden">Loom</h1>
        </div>
        <div className="order-last">
          <ThemeSwitcher />
          <Avatar />
        </div>
      </div>
    </>
  );
};
