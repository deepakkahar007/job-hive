import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";

type NavbarLinksType = {
  title: string;
  url: string;
  className?: string;
  icon?: string;
}[];

const Navbar = () => {
  const NavLinks: NavbarLinksType = [
    { title: "jobs", url: "/jobs" },
    { title: "about", url: "#" },
    { title: "profile", url: "#" },
  ];

  return (
    <MaxWidthWrapper>
      <header className="mx-4 flex flex-col items-center justify-between p-4 md:flex-row">
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <Home className="text-primary" />
          </Link>
        </div>
        <nav className="mt-2 space-x-4 md:space-x-4">
          {NavLinks.map(({ title, url, className }) => {
            return (
              <Link
                key={title}
                className={cn(
                  "font-sans font-bold uppercase transition-colors duration-700 hover:text-primary hover:underline hover:decoration-primary hover:underline-offset-4",
                  className,
                )}
                to={url}
              >
                {title}
              </Link>
            );
          })}
        </nav>
      </header>
    </MaxWidthWrapper>
  );
};

export default Navbar;
