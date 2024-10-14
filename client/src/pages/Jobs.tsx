import { useParams } from "react-router-dom";

const Jobs = () => {
  const { title } = useParams();
  return (
    <div>
      <h1 className="text-center text-7xl">jobs page</h1>
      {title}
    </div>
  );
};

export default Jobs;
