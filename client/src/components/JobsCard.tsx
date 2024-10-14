import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { BookMarkedIcon, BookmarkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const JobsCard = () => {
  const [isSaved, setIsSaved] = useState(true);
  return (
    <section className="my-4 p-3">
      <Link to={"/job/hello"}>
        <Card className="flex flex-col items-start justify-between rounded-2xl hover:border hover:border-primary md:flex-row">
          <CardHeader>
            <CardTitle>Software developer</CardTitle>
            <h2>microoft</h2>
          </CardHeader>
          <CardFooter className="flex flex-row items-center justify-center space-x-4 md:flex-col md:space-y-4">
            <p className="mt-2">last date of application</p>
            {isSaved ? (
              <BookmarkIcon
                className="cursor-pointer items-end text-primary"
                onClick={() => setIsSaved(!isSaved)}
              />
            ) : (
              <BookMarkedIcon
                className="text-white"
                onClick={() => setIsSaved(!isSaved)}
              />
            )}
          </CardFooter>
        </Card>
      </Link>
    </section>
  );
};

export default JobsCard;
