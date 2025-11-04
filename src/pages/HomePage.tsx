import { Link } from "react-router-dom"; // Import Link
import { TrendingDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button"; // Import shadcn Button

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">
              <span className="block text-gray-900 mb-2">Find the Best</span>
              <span className="block bg-linear-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                Game Deals
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
              Compare prices across multiple stores and never overpay for games
              again
            </p>

            {/* "View More" Button */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-fuchsia-500 to-cyan-500 hover:bg-fuchsia-600 text-white w-full sm:w-[530px]"
              >
                <Link to="/games">View More Deals</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 ">
              <div className="flex items-center space-x-2 text-gray-600">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span>10,000+ Games</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <TrendingDown className="w-5 h-5 text-green-600" />
                <span>Save up to 90%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
