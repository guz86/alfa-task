import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BreedsPage from "./pages/BreedsPage";
import NotFoundPage from "./pages/NotFoundPage";
import BreedDetail from "./components/BreedDetail/BreedDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<BreedsPage />} />
        <Route path="/products/:breedName" element={<BreedDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
