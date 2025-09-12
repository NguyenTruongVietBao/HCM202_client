import { Route, Routes } from "react-router";
import About from "../page/About";
import Home from "../page/Home";
import { Video } from "lucide-react";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:id" element={<Video />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
