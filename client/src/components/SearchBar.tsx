import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-row items-center justify-center opacity-75 md:w-2/3 md:items-center md:justify-center"
      >
        <input
          type="text"
          name="search"
          placeholder="search your desired job"
          className="mr-3 h-9 w-full items-center rounded-2xl p-3 font-sans text-black md:w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
