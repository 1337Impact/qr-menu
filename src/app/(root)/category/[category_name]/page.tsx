import Link from "next/link";
import fetchItems from "./fetchItems";

export default async function Page({
  params,
}: {
  params: { category_name: string };
}) {
  const items = await fetchItems(params.category_name);
  return (
    <main className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {items ? (
          items.map((item) => (
            <Link
              href={`${params.category_name}/${item.id}`}
              key={item.id}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  alt="Dish 1"
                  className="w-full h-48 object-cover"
                  height="200"
                  src={item.images[0]}
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <div className="p-4">
                  <h3 className="text-gray-700 text-lg font-semibold mb-2">
                    {item.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">
                      {item.price}DH
                    </span>

                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center">No items found</div>
        )}
      </div>
    </main>
  );
}
