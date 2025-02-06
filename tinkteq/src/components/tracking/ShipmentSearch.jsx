import React, { useState } from 'react';
import { Search } from 'lucide-react';

export function ShipmentSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter tracking number..."
        className="w-full pl-4 pr-12 py-2 rounded-lg bg-[#f5f5f5] dark:bg-off-black-400"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        <Search size={20} />
      </button>
    </form>
  );
}