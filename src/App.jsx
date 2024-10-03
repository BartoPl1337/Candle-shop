import React from "react";
import MainPage from "./Pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Authentication from "./Pages/Authentication";
import Shipping from "./Pages/Shipping";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/Shipping" element={<Shipping />} />
      </Routes>
    </Router>
  );
}

export default App;
