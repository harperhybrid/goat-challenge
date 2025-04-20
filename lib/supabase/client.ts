// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'
import { Database } from './database.types'

let supabaseClient: ReturnType<typeof createBrowserClient<Database>> | null = null

export function createClientSupabaseClient() {
  if (supabaseClient === null) {
    supabaseClient = createBrowserClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  }
  
  return supabaseClient
}