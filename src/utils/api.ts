export const getErrorMessage = (err: unknown, fallback = 'An error occurred.'): string => {
  return err && typeof err === 'object' && 'message' in err && typeof err.message === 'string' ? err.message : fallback;
};
