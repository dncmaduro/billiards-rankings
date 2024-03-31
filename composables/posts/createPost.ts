import { createClient } from "@supabase/supabase-js";

export const createPost = async (title: string, link: string) => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.service_role
  );
  const { data } = await supabase
    .from("post")
    .insert([{ title: title, link: link }])
    .select();
  return data;
};
