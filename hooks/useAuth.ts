import { useState } from "react";
import { User } from "@supabase/supabase-js";

import { login } from "@/app/(auth)/login/login-action";

export function useAuth() {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signIn(formData: FormData) {
    setLoading(true);
    setError(null);
    try {
      const u = await login(formData);

      setUser(u.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { user, loading, error, signIn };
}
