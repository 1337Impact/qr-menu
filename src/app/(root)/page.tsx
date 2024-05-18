const data = [
  {
    id: 1,
    title: "Pizzas",
    description: "Delicious pizzas with a variety of toppings.",
    image: "https://img.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg?t=st=1716046749~exp=1716050349~hmac=04657848286ce9cb6ba735ec43245c75ead62fde8a9e099c1e975fddf309e50a&w=740",
  },
  {
    id: 2,
    title: "Drinks",
    description: "Refreshing beverages to quench your thirst.",
    image: "https://img.freepik.com/free-photo/front-close-view-organic-fresh-juices-bottles-served-with-tubes-fruits-wooden-cutting-board-brown-table_140725-94487.jpg?t=st=1716047942~exp=1716051542~hmac=ab7101cf52ed610f16310a329c418c54898f85ac543749ca59c6fda04c9cf780&w=1380",
  },
  {
    id: 3,
    title: "Desserts",
    description: "Sweet treats to satisfy your cravings.",
    image: "https://img.freepik.com/free-photo/closeup-shot-delicious-cream-puff-with-strawberries-wooden-table_181624-30300.jpg?t=st=1716048118~exp=1716051718~hmac=be10069e9b8195c9bbb22e9e4f3f61644c2877b081b9ceaf1c6451c02daa5e17&w=1380",
  },
  {
    id: 4,
    title: "Appetizers",
    description: "Delicious starters to kick off your meal.",
    image: "https://img.freepik.com/free-photo/snacks-set-wooden-board_140725-5469.jpg?t=st=1716048157~exp=1716051757~hmac=28e8e39163c0ca41234c97e3f4f65cf20db847e337ed17240640910c3ffe6cd8&w=740",
  },
  {
    id: 7,
    title: "Burgers",
    description: "Juicy burgers with a variety of toppings.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Component() {
  return (
    <main className="container mx-auto my-12 px-4 md:px-6">
      <h2 className="text-3xl font-bold mb-8">Menu Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((category) => (
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              alt={category.title}
              className="w-full h-32 object-cover"
              height="200"
              src={category.image}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="bg-white p-5 shadow-md">
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-600">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
