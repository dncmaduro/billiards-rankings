import { createClient } from "@supabase/supabase-js";

export const getPlayer = async (id: number) => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.service_role
  );
  const { data } = await supabase.from("player").select("*").eq("id", id);
  return data;
};
