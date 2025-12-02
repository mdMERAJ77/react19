import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import MovieLinks from "./pages/MovieLinks";
import LinkProvider from "./context/LinkProvider";
import DownloadFlowProvider from "./context/DownloadFlowProvider";
function App() {
  return (
    <LinkProvider>
      <DownloadFlowProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movielinks" element={<MovieLinks />} />
        </Routes>
        <Footer />
      </DownloadFlowProvider>
    </LinkProvider>
  );
}

export default App;
