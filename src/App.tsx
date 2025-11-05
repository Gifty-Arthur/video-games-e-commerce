import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { GameList } from "./pages/GameList";
import { GameDetailPage } from "./pages/GameDetail";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="container mx-auto">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/games" element={<GameList />} />

          <Route path="/game/:gameID" element={<GameDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
