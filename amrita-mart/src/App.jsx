import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/Navbar.jsx";
import BentoGrid from "./components/BentoBox.jsx";
import BookCake from "./pages/BookCake";

function Home() {
  return (
    <div>
      <BentoGrid />
    </div>
  );
}
function App() {
  return (
    <Router>
      <NavBar /> {/* Navbar is outside so it appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home Page */}
        <Route path="/book-cake" element={<BookCake />} />  {/* Book a Cake Page */}
      </Routes>
    </Router>
  );
}


export default App;
