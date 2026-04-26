import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const checkTrialStatus = async (userId: string) => {
  // Logic to check 30-day free trial status
  const { data, error } = await supabase
    .from('profiles')
    .select('trial_start, is_trial_active')
    .eq('id', userId)
    .single();
    
  if (error) return { active: false, daysLeft: 0 };
  
  const startDate = new Date(data.trial_start);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return {
    active: data.is_trial_active && diffDays <= 30,
    daysLeft: Math.max(0, 30 - diffDays)
  };
};
