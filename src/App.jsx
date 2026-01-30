import { Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import React, { useState, useEffect } from "react";
import "./App.css";
import popupImg from "./assets/images/popup1.jpg";
import MenCollection from "./pages/collections/MenCollection";
import WomenCollection from "./pages/collections/WomenCollection";
import KidCollection from "./pages/collections/KidCollection";
import AboutUs from "./pages/AboutUs";
import BrandSection from "./components/BrandSection";
import Footer from "./components/Footer";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const popupClosed = localStorage.getItem("popupClosed");
      if (!popupClosed) {
        setShowPopup(true);
      }
    }
  }, [location]);

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setShowPopup(false);
      localStorage.setItem("popupClosed", "true");
    } else {
      alert("Please enter your email!");
    }
  };

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("popupClosed", "true");
  };

  return (
    <CartProvider>
      <Header />

      <div className="pt-24">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />

                {showPopup && (
                  <div className="popup-overlay">
                    <div className="popup-content">
                      <button className="close-btn" onClick={handleClose}>
                        &times;
                      </button>

                      <img
                        src={popupImg}
                        alt="Popup"
                        className="popup-image"
                      />

                      <p>
                        Sign up to get notifications on offers and new arrivals.
                      </p>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="popup-input"
                      />

                      <button
                        className="popup-submit"
                        onClick={handleSubscribe}
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                )}
              </>
            }
          />

          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/collection/men" element={<MenCollection />} />
          <Route path="/collection/women" element={<WomenCollection />} />
          <Route path="/collection/kids" element={<KidCollection />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
      <BrandSection />
      <Footer />
    </CartProvider>
  );
}

export default App;
