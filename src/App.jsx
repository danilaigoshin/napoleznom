import { useState } from 'react'
import './App.css'
import HeaderElem from './sections/header'
import MainPage from './pages/mainPage'
import AboutPage from './pages/aboutPage'
import FooterElem from './sections/footer'
import WorkFormatsPage from './pages/workformatsPage'
import ProductsSection from './pages/products'
import ProductDetails from './sections/productDetailsSection'
import ProductDetailsPage from './pages/productDetailsPage'
import ContactsPage from './pages/contactsPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { PromoPage } from './pages/promoPage'

function App() {
  return (
    <BrowserRouter>
      <HeaderElem />
      <AppRoutes />
      <FooterElem />
    </BrowserRouter>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path='/Igoshina' element={<MainPage/> }/>
      <Route path='/Igoshina/about' element={<AboutPage/> }/>
      <Route path='/Igoshina/workFormats' element={<WorkFormatsPage/> }/>
      <Route path='/Igoshina/products' element={<ProductsSection/> }/>
      <Route path='/Igoshina/contacts' element={<ContactsPage/> }/>
      <Route path='/Igoshina/promo' element={<PromoPage/> }/>
      <Route path="/Igoshina/productDetails/:productId" element={<ProductDetailsPage />} />
    </Routes>
  );
}


export default App
