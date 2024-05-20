import Link from "next/link";
import fetchItemDetail from "./fetchItemDetail";

export default async function Page({
  params,
}: {
  params: { item_id: string };
}) {
  const items = await fetchItemDetail(params.item_id);
  console.log(items);
  return (
    <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        hello
      </div>
    </main>
  );
}
