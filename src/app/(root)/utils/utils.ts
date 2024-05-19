import { supabase } from "../../../utils/supabase";
export async function fetchCategories() {
  const { data: categories, error } = await supabase
    .from("Category")
    .select("*");
  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
  return categories;
}
