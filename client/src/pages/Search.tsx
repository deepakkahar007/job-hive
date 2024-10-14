import { useParams } from "react-router-dom";

const Search = () => {
  const { title } = useParams();
  return <div className="text-center text-7xl">{title}</div>;
};

export default Search;
