"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();
  const loginData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error, data } = await supabase.auth.signInWithPassword(loginData);
  if (error) {
    console.error(error);
    redirect("/login?error=login-failed");
  }
  console.log(data);
  if (data.user) {
    revalidatePath("/login");
    if (data.user.role === "admin") {
      redirect("/admin");
    } else if (data.user.role === "waiter") {
      redirect("/orders");
    }
  }
}
