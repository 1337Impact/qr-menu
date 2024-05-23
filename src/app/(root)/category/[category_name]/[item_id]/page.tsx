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
      className="min-h-screen bg-gray-100  flex justify-center items-top"
      style={{
        backgroundImage: "url('/bg-detail.webp')",
        backgroundSize: "cover",
        backgroundBlendMode: "soft-light",
        backgroundPosition: "bottom",
      }}
    >
      <div
        className="container mx-auto lg:px-4  lg:py-12 
        flex flex-col lg:flex-row lg:justify-between  relative "
      >
        <div className="lg:w-1/2 w-full  order-2 lg:order-1">
          <div className="lg:w-1/2 w-full order-1 lg:hidden  mb-4 relative">
            <img
              src={items.images[0] ?? ""}
              alt="title"
              className="h-60 lg:w-60 w-full  object-cover  shadow-md 
            shadow-gray-200  ease-in-out rounded-b-2xl "
            />
            <h1
              className="lg:hidden text-2xl font-bold text-green-700 absolute bottom-0 justify-center items-center bg-white px-4 py-1 rounded-tr-lg rounded-bl-lg shadow-inner 
          shadow-gray-200  w-32 text-center"
            >
              {items.price + "Mad"}{" "}
            </h1>
          </div>
          <div className="px-2">
            <h1 className="text-2xl lg:text-3xl font-bold ">{items.name}</h1>
            <h3 className=" text-lg lg:text-xl  text-gray-600  lg:mt-2 lg:mb-4 ">
              {items.short_desc}
            </h3>
            <h1 className="hidden lg:block text-2xl font-bold text-green-700">
              {items.price + "Mad"}{" "}
            </h1>
            <h1 className="text-lg font-bold mt-4">Description</h1>
            <p className="text-gray-600"> {items.long_desc}</p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full order-1 lg:order-2 hidden lg:flex">
          <img
            src={items.images[0] ?? ""}
            alt="title"
            className="h-80 lg:w-96 w-full shadow-lg hover:scale-105
           shadow-gray-500 object-cover ml-4 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>
    </main>
  );
}
