import { createClient } from "@supabase/supabase-js";

export const updatePoints = async (id: number, points: number) => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.service_role
  );
  const { data } = await supabase
    .from("player")
    .update({ points: points })
    .eq("id", id)
    .select("*");
  console.log(data);
  return data;
};
