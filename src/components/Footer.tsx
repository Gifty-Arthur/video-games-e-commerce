import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 bg-gray-200 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <Link to="/" className="font-bold text-2xl inline-block mb-2">
              <span className="bg-linear-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                CompStore
              </span>
            </Link>
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} CompStore. All rights reserved.
            </p>
          </div>

          <div className="text-center mb-6 md:mb-0">
            <p className="text-sm text-gray-600">
              All game data provided by the{" "}
              <a
                href="https://apidocs.cheapshark.com/"
                className="font-medium text-fuchsia-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CheapShark API
              </a>
              .
            </p>
          </div>

          {/* 3. Back to Top Button */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="
                flex items-center gap-2 text-sm text-gray-600 
                hover:text-fuchsia-500 transition-colors
              "
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
