import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'antd/dist/reset.css';

import { BrowserRouter, Routes, Route } from "react-router";
import Contact from './pages/Contact.jsx';
import Sign_in from './pages/Sign_in.jsx';
import Create from './pages/Create.jsx';
import Login from './pages/Login.jsx';
import Cart from './pages/Cart.jsx';
import Product from './pages/Product.jsx';
import CartProvider from './Components/CartContext.jsx';
// import CartProvider from './pages/CartContext.jsx';

// import Header from './Components/Header.jsx';
// import Footer from './Components/Footer.jsx';
// import Button from './Components/Button.jsx';

import Register from './pages/Register.jsx';
import Text from './pages/Text.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import Home from './pages/home.jsx';
import About from './pages/About.jsx';
// name,description,catogary
// price

createRoot(document.getElementById('root')).render(
  <>
     {/* <Header/> */}
     <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/Cart" element={<Cart />} />

        <Route path="/" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/api/data" element={<Text />} />
        <Route path="/Sign_in" element={<Sign_in/>} />
        <Route path="Create/" element={<Create />} />
        <Route path="product/" element={<Product />} />

         <Route path="/app" element={
          <ProtectedRoute>
          <App/>


          </ProtectedRoute>
         }/>
      </Routes>
    </BrowserRouter>
   </CartProvider> 

  </>

)
