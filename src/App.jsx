
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Discountoffer from './components/Discountoffer';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Brandsnames from './components/Brandsnames';
import Newarrival from './components/Newarrival';
import Topsell from './components/Topsell';
import Gridlayout from './components/Gridlayout';
import Testimonials from './components/Testimonial';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Discountoffer />
      <Navbar />
      <Routes>

        <Route
          path="/"
          element={
            <main>
              <Herosection />
              <Brandsnames />
              <Newarrival />
              <Topsell />
              <Gridlayout />
              <Testimonials />
            </main>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Newarrival" element={<Newarrival />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Testimonials />
      <Footer />
    </BrowserRouter>
  );
}

export default App;