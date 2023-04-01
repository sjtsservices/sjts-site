import { createClient } from '@supabase/supabase-js'


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);


export function getSupabaseFileUrl (path:string) {
    return `${process.env.NEXT_PUBLIC_SUPABASE_URL||''}/storage/v1/object/public/${process.env.NEXT_PUBLIC_SUPABASE_CV_BUCKET_NAME||''}/${path}`
}

export default supabase;