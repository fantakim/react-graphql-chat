import { LeftSidebar } from './LeftSidebar';
import { PageContent } from './PageContent';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="drawer drawer-mobile">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <PageContent children={children} />
        <LeftSidebar />
      </div>
    </>
  );
};
