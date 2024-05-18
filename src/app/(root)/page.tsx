import CategoryCard from "./Components/CategoryCard";
import { Category } from "./types/types";
import { fetchCategories } from "./utils/utils";

export default async function Home() {
  const categories: Category[] = await fetchCategories();

  return (
    <main className="container mx-auto my-12 px-4 md:px-6">
      <h2 className="text-3xl font-bold mb-8">Menu Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </main>
  );
}
