import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <Link href="#">
        <img
          alt="Acme Eatery"
          className="h-8"
          height={40}
          src="https://w7.pngwing.com/pngs/224/1014/png-transparent-my-new-restaurant-logo-bistro-cafe-ermita-conrad-manila-restaurant-restaurant-logo-food-text-logo.png"
          style={{
            aspectRatio: "150/40",
            objectFit: "cover",
          }}
          width={150}
        />
      </Link>
      <button className="w text-white">
        <ShoppingCartIcon className="h-6 w-6" />
        <span className="sr-only">Add to cart</span>
      </button>
    </header>
  );
}


function ShoppingCartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}