import { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const AuthLayout = ({ children }: IProps) => {
  return <div className="flex h-screen w-full items-center justify-center">{children}</div>;
};

export default AuthLayout;
