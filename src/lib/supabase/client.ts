import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  console.log("DEVFLOW_DEBUG_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log("DEVFLOW_DEBUG_KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co';
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';
  console.log("DEVFLOW_DEBUG_RESOLVED_URL:", url);
  console.log("DEVFLOW_DEBUG_RESOLVED_KEY:", anonKey);
  return createBrowserClient(url, anonKey);
}
