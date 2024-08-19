import { z } from 'zod';

import { getZodKeys } from '@/util/zod';

const EnvServerSchema = z.object({
  SUPABASE_SERVICE_ROLE_KEY: z.string({ message: 'Missing NEXT_PUBLIC_SUPABASE_SERVICE_KEY env variable.' }),
});

const ENV_SERVER = EnvServerSchema.parse(
  getZodKeys(EnvServerSchema).reduce((acc, key) => ({ ...acc, [key]: process.env[key] }), {}),
);

export default ENV_SERVER;
