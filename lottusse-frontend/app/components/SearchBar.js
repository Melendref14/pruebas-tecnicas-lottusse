const SearchBar = ({ searchName, setSearchName }) => (
    <div className="w-full max-w-md mx-auto mt-4">
        <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Buscar producto por nombre..."
            className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
);

export default SearchBar;