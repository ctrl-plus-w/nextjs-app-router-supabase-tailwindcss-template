'use client';

import { useRouter } from 'next/navigation';

import createSupabaseClient from '@/instance/supabase-client';

const SignOutButton = () => {
  const router = useRouter();

  const supabase = createSupabaseClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
  };

  return (
    <button onClick={signOut} className="button">
      Log out
    </button>
  );
};

export default SignOutButton;
