import { Metadata } from 'next';

import { logIn } from '@/action/auth';

import AuthForm from '@/module/auth-form';

export const metadata: Metadata = {
  title: 'Login',
};

interface IProps {
  searchParams?: Record<string, string | undefined>;
}

const LoginPage = ({ searchParams }: IProps) => {
  return (
    <AuthForm
      action={logIn}
      submitButtonValue="Log in"
      externalLink={{ value: 'Sign up', href: '/auth/signup' }}
      error={searchParams ? searchParams['error'] : undefined}
    />
  );
};

export default LoginPage;
