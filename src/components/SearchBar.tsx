import { Dispatch, SetStateAction, useState } from 'react';

interface SearchBarProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-4 mb-6 w-96 bg-white shadow-md rounded-md">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search for a car by type..."
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
};

export default SearchBar;