import Link from 'next/link';

import { ExternalLinkIcon } from 'lucide-react';

import { cn } from '@/util/style';

interface IProps {
  action: (formData: FormData) => Promise<void>;

  submitButtonValue: string;

  externalLink: {
    value: string;
    href: string;
  };

  error?: string;
}

const AuthForm = ({ action, submitButtonValue, externalLink, error }: IProps) => {
  return (
    <form className="flex w-full max-w-xs flex-col items-center gap-6" action={action}>
      <label className="flex w-full flex-col gap-2" htmlFor="email">
        <span className="font-semibold">
          Email <span className="text-red-700">*</span>
        </span>
        <input
          id="email"
          name="email"
          type="email"
          className={cn(
            'rounded border border-black px-4 py-2 ring ring-transparent',
            'focus:border-blue-600 focus:outline-none focus:ring-blue-100',
            'hover:border-blue-600',
            'transition-all duration-300 ease-in-out',
          )}
          placeholder="john.doe@gmail.com"
          required
        />
      </label>

      <label className="flex w-full flex-col gap-2" htmlFor="password">
        <span className="font-semibold">
          Password <span className="text-red-700">*</span>
        </span>
        <input
          id="password"
          name="password"
          type="password"
          className={cn(
            'rounded border border-black px-4 py-2 ring ring-transparent',
            'focus:border-blue-600 focus:outline-none focus:ring-blue-100',
            'hover:border-blue-600',
            'transition-all duration-300 ease-in-out',
          )}
          placeholder="********"
          required
        />
      </label>

      <input type="submit" className="button w-full" value={submitButtonValue} />

      <Link href={externalLink.href} className="group flex items-center gap-2">
        <span>{externalLink.value}</span>

        <ExternalLinkIcon size={18} />
      </Link>

      {error ? <p className="w-full border-t border-red-600 bg-red-100 p-3 text-sm text-red-600">{error}</p> : <></>}
    </form>
  );
};

export default AuthForm;
