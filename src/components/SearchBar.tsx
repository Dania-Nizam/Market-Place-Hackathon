import { Dispatch, SetStateAction, useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto p-2">
      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-indigo-500 transition">
        <span className="p-3">
          <Search className="text-gray-500" size={20} />
        </span>
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for a car..."
          className="w-full p-3 text-gray-700 placeholder-gray-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
