import { supabase } from "@/utils/supabase";

export interface Item {
  id: string;
  name: string;
  price: number;
  short_desc: string;
  long_desc: string;
  images: string[];
}

export default async function fetchItemDetail(
  item_id: string
): Promise<Item | undefined> {
  const { data, error } = await supabase
    .from("Item")
    .select("id, name, price, images, short_desc, long_desc")
    .eq("id", item_id)
    .single();
  if (error) {
    console.error("Error fetching itmes:", error);
    return undefined;
  }
  return data;
}
