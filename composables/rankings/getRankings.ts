import { createClient } from "@supabase/supabase-js";

export const getRankings = async () => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.service_role
  );
  const { data } = await supabase
    .from("player")
    .select("*")
    .order("points", { ascending: false });
  return data;
};
