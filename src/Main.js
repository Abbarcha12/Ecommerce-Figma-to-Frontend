import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from "../src/Layout/Header"
import Footer from "../src/Layout/Footer"

import Home from "../src/Layout/Home.js"

import Shop from './Layout/Shop'
import Contact from './Layout/Contactus'
import Faq from './Layout/Faq'
import ContactInfo from './Layout/ContactInfo'
import ReviewPage from './Layout/ReviewPage'
import BillingDetail from './Layout/BillingDetails'
import Orders from './Layout/Orders'
import { ProductDetailPage } from './component/PagesComponents/ProductDetailPage'
import Product from './component/PagesComponents/Product'
import BankDetails from './component/PagesComponents/BankingDetail'


const Main = () => {
 return (
  <>
   <Header />
   <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/home" element={<Home />} />

    <Route path="/shop" element={<Shop />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/Faq" element={<Faq />} />
    <Route path="/ConatactInfo" element={<ContactInfo />} />
    <Route path="/reviews" element={<ReviewPage />} />
    <Route path="/Billings" element={<BillingDetail />} />
    <Route path="/order" element={<Orders />} />
    <Route path="/ProductDetailPage" element={<ProductDetailPage />} />
    <Route path="/ProductPage" element={<Product />} />
    <Route path="/Bank" element={<BankDetails />} />






   </Routes>
   <Footer />

  </>
 )
}

export default Main