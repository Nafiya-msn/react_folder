import { useState } from "react";
import productsData from "./data/products.json";
import ProductList from "./components/ProductList";
import CategoryFilter from "./components/CategoryFilter";

export default function App() {
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  const filteredProducts =
    category === "All"
      ? productsData
      : productsData.filter((p) => p.category === category);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-600">
        Product Listing App
      </h1>
      <CategoryFilter categories={categories} setCategory={setCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
}
