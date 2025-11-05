import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "../assets/hero1.png";
import { useQuery } from "@tanstack/react-query";
import { fetchStores } from "../lib/api";
import type { Store } from "../types";
import { Card } from "@/components/ui/card";
import { LuSparkles } from "react-icons/lu";

const HomePage = () => {
  const { data: storesData, isLoading } = useQuery<Store[]>({
    queryKey: ["stores"],
    queryFn: fetchStores,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const topStores = storesData?.filter((s) => s.isActive).slice(0, 8);

  return (
    <div className="min-h-screen bg-white md-mt-40 ">
      <section id="hero" className=" pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-center space-y-8 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">
                <span className="block text-gray-900 mb-2">Find the Best</span>
                <span className="block bg-linear-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                  Game Deals
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                Compare prices across multiple stores and never overpay for
                games again
              </p>

              <div className="pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-linear-to-r from-fuchsia-500 to-cyan-500 hover:bg-fuchsia-600 text-white w-full sm:w-[530px]"
                >
                  <Link to="/games">View More Deals</Link>
                </Button>
              </div>

              {/* image */}
            </div>
            <div className="md:block hidden w-1/2">
              <img
                src={hero}
                alt="Hero Image"
                className=" mx-auto w-full max-w-4xl -mt-12"
              />
            </div>
          </div>
        </div>
      </section>
      {/* who we compare */}
      <div
        id="compare-grid"
        className=" px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-fuchsia-500"></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-fuchsia-100 rounded-full shadow-sm">
                <LuSparkles className="w-4 h-4 text-fuchsia-600" />
                <span className="text-sm font-bold text-fuchsia-600 uppercase tracking-wider">
                  Premium Partners
                </span>
              </div>
              <div className="h-px w-12 bg-linear-to-l from-transparent to-cyan-500"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              Who We Compare
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Partnering with the world's leading gaming retailers to deliver
              <span className="font-semibold text-gray-900">
                {" "}
                unbeatable prices
              </span>
            </p>
          </div>

          {/* Store Cards Grid */}
          {isLoading ? (
            <div className="flex items-center justify-center py-32"></div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {topStores?.map((store, index) => (
                <Link
                  to="/games"
                  key={store.storeID}
                  className="group"
                  style={{
                    animation: `floatIn 0.8s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div className="relative">
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-linear-to-br from-fuchsia-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <Star className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white" />
                    </div>

                    <Card className="relative h-56 rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img
                          src={`https://www.cheapshark.com${store.images.banner}`}
                          alt={store.storeName}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-3"
                        />
                        <div className="absolute inset-0 bg-linear-to-br from-fuchsia-900/40 via-purple-900/60 to-cyan-900/40 opacity-70 group-hover:opacity-85 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>
                      </div>

                      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div
                          className="absolute inset-0 rounded-3xl bg-linear-to-r from-fuchsia-500 via-purple-500 to-cyan-500 animate-spin-slow"
                          style={{
                            padding: "2px",
                            WebkitMask:
                              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                          }}
                        ></div>
                      </div>

                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-end p-6">
                        <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                          <h3 className="text-white text-3xl font-black mb-3 drop-shadow-lg">
                            {store.storeName}
                          </h3>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </Card>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Bottom Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black bg-linear-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent mb-2">
                8+
              </div>
              <div className="text-gray-600 font-medium">Trusted Retailers</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black bg-linear-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Price Monitoring</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-black bg-linear-to-r from-cyan-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">
                90%
              </div>
              <div className="text-gray-600 font-medium">Max Savings</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
