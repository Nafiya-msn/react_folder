export default function CategoryFilter({ categories, setCategory }) {
  return (
    <div className="flex justify-center gap-3 mb-10 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-teal-500 hover:text-white transition font-medium shadow-sm hover:shadow-md"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
