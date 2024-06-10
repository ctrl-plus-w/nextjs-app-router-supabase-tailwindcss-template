import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import SignOutButton from '@/element/sign-out-button';

import createSupabaseClient from '@/instance/supabase-server';

export const metadata: Metadata = {
  title: 'Next.js App Router',
};

const HomePage = async () => {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) return redirect('/auth/login');

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <p>
        Connected wit email <code>{data.user.email}</code>.
      </p>

      <SignOutButton />
    </div>
  );
};

export default HomePage;
