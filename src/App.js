import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Ensure this path is correct
import ProductList from './ProductList'; // Ensure this path is correct
import Cart from './Cart'; 
import Checkout from './Checkout'; 
import Navbar from './Navbar'; 
import { CartProvider } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} /> {/* Use /products instead of /ProductsList */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
