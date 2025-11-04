import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import { GameList } from "./pages/GameList";
import { GameDetailPage } from "./pages/GameDetail";
import HomePage from "./pages/HomePage";

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
    </>
  );
};

export default App;
