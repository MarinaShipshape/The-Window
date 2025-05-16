    import { createClient } from '@supabase/supabase-js'

    // Get Supabase URL and anon key from environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Ensure the environment variables are not undefined
    if (!supabaseUrl) {
      throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_URL")
    }
    if (!supabaseAnonKey) {
      throw new Error("Missing environment variable: NEXT_PUBLIC_SUPABASE_ANON_KEY")
    }

    // Initialize and export the Supabase client
    export const supabase = createClient(supabaseUrl, supabaseAnonKey)