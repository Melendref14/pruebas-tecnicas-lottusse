const SearchBar = ({ searchName, setSearchName }) => (
    <div className="mt-6">
        <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Buscar por su nombre..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
        />
    </div>
);

export default SearchBar;