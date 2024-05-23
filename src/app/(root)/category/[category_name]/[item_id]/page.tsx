import Link from "next/link";
import fetchItemDetail from "./fetchItemDetail";
export interface Item {
  id: string;
  name: string;
  price: number;
  short_desc: string;
  long_desc: string;
  images: string[];
}

export default async function Page({
  params,
}: {
  params: { item_id: string };
}) {
  const items: Item = (await fetchItemDetail(params.item_id)) ?? {
    id: "",
    name: "",
    price: 0,
    short_desc: "",
    long_desc: "",
    images: [],
  };

  console.log(items);
  return (
    <main
      className="container mx-auto px-4 md:px-6 py-12 md:py-16 
   flex flex-col lg:flex-row lg:justify-between   "
    >
      <div className="lg:w-1/2 w-full  order-2 lg:order-1">
        <h1 className="text-3xl font-bold">{items.name}</h1>
        <h3 className="text-xl text-gray-600  mt-2 lg:mb-4 ">
          {items.short_desc}
        </h3>
        <div className="lg:w-1/2 w-full order-1 lg:hidden  my-4">
          <img
            src={items.images[0] ?? ""}
            alt="title"
            className="h-60 lg:w-60 w-full  object-cover  shadow-lg hover:scale-95
            shadow-gray-500 transition-all duration-500 ease-in-out"
          />
        </div>
        <h1 className="text-2xl font-bold text-green-700">
          {items.price + "Mad"}{" "}
        </h1>
        <h1 className="text-lg font-bold">Description</h1>
        <p> {items.long_desc}</p>
      </div>
      <div className="lg:w-1/2 w-full order-1 lg:order-2 hidden lg:flex">
        <img
          src={items.images[0] ?? ""}
          alt="title"
          className="h-80 lg:w-96 w-full shadow-lg hover:scale-105
           shadow-gray-500 object-cover ml-4 transition-all duration-500 ease-in-out"
        />
      </div>
    </main>
  );
}
