export const Display = ({ selectedItem }) => {
  return (
    <>
      <main className="flex-1 p-6 bg-gray-100 flex flex-col items-center justify-center">
        {selectedItem ? (
          <>
            <h1 className="text-2xl font-bold">{selectedItem.name}</h1>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              loading="lazy"
              className="mt-4 w-74 h-64 object-cover rounded-lg shadow-lg"
            />
          </>
        ) : (
          <h1 className="font-bold text-gray-600 text-2xl">
            Select an item to display
          </h1>
        )}
      </main>
    </>
  );
};
