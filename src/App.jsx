import Nav from "./Components/Nav/Nav.jsx";
import Footer from "./Components/footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart.jsx";
import Home from "./Home/Home.jsx";
import Products from "./Products/Products.jsx";
import Service from "./Service/Service.jsx";
import Contact from "./Contact/Contact.jsx";
import New from "./News/New.jsx";
import Signin from "./LogReg/Signin.jsx";
import Signup from "./LogReg/Signup.jsx";
import About from "./About/About.jsx";
import Checkout from "./Checkout/Checkout.jsx"; 
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Nav />
      <Toaster position="top-center" reverseOrder={false} />


      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Products */}
        <Route path="/products" element={<Products />} />

        {/* Service */}
        <Route path="/services" element={<Service />} />

        {/* News */}
        <Route path="/news" element={<New />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* About */}
        <Route path="/about" element={<About />} />
      {/* cart */}
        <Route path="/cart" element={<Cart />} />
           {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />
        {/* Auth */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Cart & Checkout */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
              Page Not Found
            </h1>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
