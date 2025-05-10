"use server";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user)
    throw new Error(
      error?.message || "L'email ou le mot de passe est incorrect"
    );

  return { success: true, user: data.user };
}

export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();
}
