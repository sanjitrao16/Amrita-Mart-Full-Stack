import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import NavBar from "./components/Navbar.jsx";
import BentoGrid from "./components/BentoBox.jsx";
import BookCake from "./pages/BookCake";
import Shop from "./pages/Shop.jsx";

function Home() {
  return (
    <div>
      <BentoGrid />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Wrap everything inside CartProvider */}
      <Router>
        <NavBar /> {/* Navbar remains outside so it appears on all pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/book-cake" element={<BookCake />} />{" "}
          {/* Book a Cake Page */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
