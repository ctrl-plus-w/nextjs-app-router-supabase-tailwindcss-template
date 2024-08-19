import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

import { ZodError } from 'zod';

export const getErrorMessage = (err: unknown, fallback = 'An error occurred.'): string => {
  if (err instanceof ZodError) return err.errors.map((error) => error.message)[0];
  if (err && typeof err === 'object' && 'message' in err && typeof err.message === 'string') return err.message;
  return fallback;
};

export const getURLWithError = (path: string, error: unknown) => {
  return `${path}?error=${encodeURIComponent(getErrorMessage(error))}`;
};

export const getNextResponseWithError = (path: string, error: unknown) => {
  return NextResponse.redirect(getURLWithError(path, error));
};

export const redirectError = (path: string, error: unknown) => {
  return redirect(getURLWithError(path, error));
};
