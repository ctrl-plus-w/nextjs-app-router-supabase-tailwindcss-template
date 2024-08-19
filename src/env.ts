import { z } from 'zod';

import { getZodKeys } from '@/util/zod';

const EnvSchema = z.object({
  // Misc
  NEXT_PUBLIC_APP_URL: z.string({ message: 'Missing NEXT_PUBLIC_APP_URL env variable.' }),

  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: z.string({ message: 'Missing NEXT_PUBLIC_SUPABASE_URL env variable.' }),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string({ message: 'Missing NEXT_PUBLIC_SUPABASE_ANON_KEY env variable.' }),
});

const ENV = EnvSchema.parse(getZodKeys(EnvSchema).reduce((acc, key) => ({ ...acc, [key]: process.env[key] }), {}));

export default ENV;
