import { supabase } from "@/utils/supabase";

export interface Item {
  id: string;
  name: string;
  price: number;
  images: string[];
}

export default async function fetchItemDetail(
  item_id: string
): Promise<Item[] | undefined> {
  const { data, error } = await supabase
    .from("Item")
    .select("id, name, price, images")
    .eq("id", item_id);
  if (error) {
    console.error("Error fetching itmes:", error);
    return [];
  }
  return data;
}
