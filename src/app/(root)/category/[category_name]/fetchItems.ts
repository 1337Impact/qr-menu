import { supabase } from "@/utils/supabase";
import { createClient } from "@/utils/supabase/server";

export interface Item {
  id: string;
  name: string;
  price: number;
  images: string[];
}

export default async function fetchItems(
  categoryName: string
): Promise<Item[] | undefined> {
  const supabase = createClient();
  const { data: catogory, error: err1 } = await supabase
    .from("Category")
    .select("id")
    .eq("name", categoryName)
    .single();
  if (err1 || !catogory) {
    console.error("Error fetching itmes:", err1);
    return;
  }
  const { data, error } = await supabase
    .from("Item")
    .select("id, name, price, images")
    .eq("category_id", catogory.id);
  if (error) {
    console.error("Error fetching itmes:", error);
    return [];
  }
  return data;
}
