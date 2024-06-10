import type { ReactElement } from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js App Router',
};

const HomePage = (): ReactElement => {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="font-mono text-3xl">Hello world !</h1>
    </div>
  );
};

export default HomePage;
