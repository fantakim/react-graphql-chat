import { Header } from './Header';

export interface PageContentProps {
  children: React.ReactNode;
}

export const PageContent = ({ children }: PageContentProps) => {
  return (
    <div className="drawer-content flex flex-col">
      <Header />
      <main className="flex-1 overflow-y-auto bg-base-200">{children}</main>
    </div>
  );
};
