export const ProFooter = ({ animaKey, animalItem, setSelectedItem }) => {
  //EXTRACT KEY FROM THE JSON
  let items = animalItem?.[animaKey];

  return (
    <footer className="bg-gray-900 text-white p-4 mt-auto">
      <h2 className="text-xl font-bold mb-2">Explore More</h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide p-2">
        {!items ? (
          <p className="text-white">Choose a category</p>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className="min-w-[150px] bg-gray-700 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-600"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-12 object-cover rounded-md"
              />
              <p className="mt-2">{item.name}</p>
            </div>
          ))
        )}
      </div>
    </footer>
  );
};
