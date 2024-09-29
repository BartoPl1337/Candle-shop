import React from "react";
import MainPage from "./Pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Pages/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
