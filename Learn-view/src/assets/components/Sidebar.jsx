export const Sidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  //GET ALL KEYS IN TO THE JSON
  let allKeys = Object.keys(categories);

  return (
    <aside className="w-1/4 bg-gray-800 text-white p-4 space-y-4 min-w-[250px] h-full fixed left-0 top-0">
      <h2 className="text-xl font-bold">Categories</h2>
      {allKeys.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`w-full p-2 rounded-lg transition-all ${
            selectedCategory === category
              ? "bg-blue-500"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {category}
        </button>
      ))}
    </aside>
  );
};
