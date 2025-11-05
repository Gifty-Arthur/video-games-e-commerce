import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const path = "/games";

    if (searchTerm.trim()) {
      navigate(`${path}?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="grid grid-cols-3 items-center bg-white shadow-xl p-4 mb-10 sticky top-0 z-50">
      <div className="flex items-center justify-between col-span-2">
        <div className="col-span-1">
          <h1 className="font-bold text-3xl">
            <Link to="/">
              <span
                className="
                bg-linear-to-r
                from-fuchsia-500
                to-cyan-500
                bg-clip-text
                text-transparent
              "
              >
                CompStore
              </span>
            </Link>
          </h1>
        </div>
        {/* 2. Search Bar  */}
        <div className="col-span-1 flex justify-center">
          <form onSubmit={handleSearchSubmit} className="w-full max-w-md">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for a video game..."
                className="pl-8 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="   ">
        <div className="col-span-1 flex justify-end">
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-fuchsia-500 transition-colors"
          >
            <span className="text-2xl md:hidden font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              +2345689076
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
