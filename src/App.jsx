
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
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
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Checkout from './components/Checkout';
import OrderSuccess from './components/Ordersuccess';



const MainLayout = () => (
  <>
    <Discountoffer />
    <Navbar />
    <Outlet />
    <Testimonials />
    <Footer />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Bina navbar/footer wale pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Navbar + footer wale pages */}
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <main>
                <Herosection />
                <Brandsnames />
                <Newarrival />
                <Topsell />
                <Gridlayout />
              </main>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/Newarrival" element={<Newarrival />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App