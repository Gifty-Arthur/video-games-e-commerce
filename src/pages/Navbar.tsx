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
    const path = "/games"; // This navigates to your GameList page

    if (searchTerm.trim()) {
      navigate(`${path}?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate(path);
    }
  };

  return (
    <nav
      className="
      sticky top-0 z-50 bg-white shadow-xl p-4 mb-10
      flex justify-between items-center
      md:grid md:grid-cols-3
    "
    >
      {/* --- 1. Logo --- */}
      {/* This just works as a flex item or a grid item */}
      <div className="md:col-span-1">
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

      <div
        className="
        w-1/2 
        md:w-full md:col-span-1 md:flex md:justify-center
      "
      >
        <form onSubmit={handleSearchSubmit} className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..." // Shortened placeholder for mobile
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div
        className="
        hidden
        md:block md:col-span-1 md:flex md:justify-end
      "
      >
        <Link
          to="/contact"
          className="text-sm font-medium hover:text-fuchsia-500 transition-colors"
        >
          <span
            className="
            text-2xl font-bold 
            bg-linear-to-r from-purple-400 to-pink-400 
            bg-clip-text text-transparent
          "
          >
            +2345689076
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
