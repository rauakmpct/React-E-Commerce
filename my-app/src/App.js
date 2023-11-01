import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Header from './component/layoutes/Header'
import Footer from './component/layoutes/Footer'
import Shop from './component/Shop'
import ShopDetails from './component/ShopDetails'
import Pages from './component/Pages'
import Contact from './component/Contact'
import Cart from './component/Cart'
import Checkout from './component/Checkout'

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shopdetails" element={<ShopDetails />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      <Footer />

    </>




  )
}

export default App