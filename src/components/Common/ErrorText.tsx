import { ReactNode } from 'react';

interface IProps {
  styleClass?: string;
  children: ReactNode;
}

function ErrorText({ styleClass, children }: IProps) {
  return <p className={`text-center text-error ${styleClass}`}>{children}</p>;
}

export default ErrorText;
