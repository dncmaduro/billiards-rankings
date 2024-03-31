import { createClient } from "@supabase/supabase-js";

export const createPlayer = async (name: string) => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.service_role
  );
  const { data } = await supabase.from("player").insert([{ name: name }]);
  return data;
};
