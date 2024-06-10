import { Metadata } from 'next';

import { signUp } from '@/action/auth';

import AuthForm from '@/module/auth-form';

export const metadata: Metadata = {
  title: 'Sign Up',
};

interface IProps {
  searchParams?: Record<string, string | undefined>;
}

const SignUpPage = ({ searchParams }: IProps) => {
  return (
    <AuthForm
      action={signUp}
      submitButtonValue="Sign up"
      externalLink={{ value: 'Log in', href: '/auth/login' }}
      error={searchParams ? searchParams['error'] : undefined}
    />
  );
};

export default SignUpPage;
