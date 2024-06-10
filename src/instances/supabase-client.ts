import { createBrowserClient } from '@supabase/ssr';

import SUPABASE from '@/constant/supabase';

const createSupabaseClient = () => {
  return createBrowserClient(SUPABASE.URL, SUPABASE.ANON_KEY);
};

export default createSupabaseClient;
