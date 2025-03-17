import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Members from './pages/Members';
import Classes from './pages/Classes';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import backgroundImage from '../src/assets/navbar/back1.jpg'; // Import the background image
import PricingTable from '../src/components/PricingTable';

const App = () => {
  return (
    <CartProvider>
      <Router>
        {/* Set background image for the entire page */}
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`, // Use the imported image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/pricing" element={<PricingTable />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;


