'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { z } from 'zod';
import { zfd } from 'zod-form-data';

import createClient from '@/instance/supabase-server';

import { getErrorMessage } from '@/util/api';

const AuthSchema = zfd.formData(
  z.object({
    email: z.string().email(),
    password: z.string(),
  }),
);

const redirectError = (path: string, error: unknown) => {
  return redirect(`${path}?error=${encodeURIComponent(getErrorMessage(error))}`);
};

export const logIn = async (formData: FormData) => {
  const supabase = createClient();

  const data = await AuthSchema.parseAsync(formData);

  const { error } = await supabase.auth.signInWithPassword(data);
  if (error) return redirectError('/auth/login', error);

  revalidatePath('/', 'layout');
  redirect('/');
};

export const signUp = async (formData: FormData) => {
  const supabase = createClient();

  const data = await AuthSchema.parseAsync(formData);

  const { error } = await supabase.auth.signUp(data);
  if (error) return redirectError('/auth/signup', error);

  revalidatePath('/', 'layout');
  redirect('/');
};
