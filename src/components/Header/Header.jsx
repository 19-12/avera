import TopBar from "./TopBar";
import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import log1 from "../../assets/images/logo.png";


const Header = () => {
  // ✅ GLOBAL CART & WISHLIST FROM CONTEXT
  const { cart, wishlist, removeFromCart } = useCart();
  const navigate = useNavigate(); // 🔹 for page navigation

  // LOCAL UI STATES
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);

  const items = ["Home", "About", "Shop", "Collection", "Blog", "Contact"];

  const handleSearch = (e) => {
    e.preventDefault();
    const match = items.find(
      (item) => item.toLowerCase() === query.toLowerCase()
    );
    setResult(match ? `${match} found!` : "Not Found");
  };

  return (
    <>
      {/* FIXED TOPBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <TopBar />
      </div>

      {/* FIXED HEADER STARTS BELOW TOPBAR */}
      <header className="fixed top-5 mt-0 left-0 w-full z-40 bg-white shadow-md">
        <div className="container mx-auto px-6 lg:px-24 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div
            className="text-2xl font-bold text-red-500 cursor-pointer"
            onClick={() => navigate("/")}
          >
             <div className="w-[100px]">
                            <a href="/">
                             <img
  src={log1}
  alt="Krishna Design"
  className="w-[110px] cursor-pointer"
  onClick={() => navigate("/")}
/>
                            </a>
                          </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex space-x-10 items-center">
            <span
              onClick={() => navigate("/")}
              className="nav-link cursor-pointer px-0 py-2  hover:text-red-500 transition"
            >
              Home
            </span>

            <span
              onClick={() => navigate("/about")}
              className="nav-link cursor-pointer px-0 py-2  hover:text-red-500 transition"
            >
              About
            </span>

            <span
              onClick={() => navigate("/shop")}
              className="nav-link cursor-pointer px-0 py-2 hover:text-red-500 transition"
            >
              Shop
            </span>

            {/* COLLECTION DESKTOP */}
            <div className="relative group">
              <span className="nav-link cursor-pointer  px-0 py-2 hover:text-red-500 transition">
                Collection
              </span>

              <div className="absolute left-0 top-full mt-4 w-56 bg-white shadow-xl rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <p
                  onClick={() => navigate("/collection/men")}
                  className="px-5 py-3 hover:bg-red-50 hover:text-red-500 cursor-pointer transition"
                >
                  Men Collection
                </p>
                <p
                  onClick={() => navigate("/collection/women")}
                  className="px-5 py-3 hover:bg-red-50 hover:text-red-500 cursor-pointer transition"
                >
                  Women Collection
                </p>
                <p
                  onClick={() => navigate("/collection/kids")}
                  className="px-5 py-3 hover:bg-red-50 hover:text-red-500 cursor-pointer transition"
                >
                  Kid Collection
                </p>
              </div>
            </div>

            <span
              onClick={() => navigate("/blog")}
              className="nav-link cursor-pointer px-0 py-2 hover:text-red-500 transition"
            >
              Blog
            </span>

            <span
              onClick={() => navigate("/contact")}
              className="nav-link cursor-pointer px-0 py-2 hover:text-red-500 transition"
            >
              Contact
            </span>
          </nav>

          {/* ICONS */}
          <div className="hidden md:flex items-center space-x-4">
            {/* SEARCH */}
            <div className="relative">
              <div
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-3 bg-gray-100 rounded-full hover:bg-red-100 text-gray-700 hover:text-red-500 cursor-pointer text-lg"
              >
                <FaSearch />
              </div>

              {searchOpen && (
                <form
                  onSubmit={handleSearch}
                  className="absolute top-14 right-0 bg-white border p-4 shadow-md w-64"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border px-3 py-2 w-full mb-2"
                  />
                  <button className="bg-red-500 text-white py-2 w-full hover:bg-red-600">
                    Search
                  </button>
                  {result && <p className="text-sm mt-2">{result}</p>}
                </form>
              )}
            </div>

            {/* LOGIN */}
            <div
              onClick={() => setLoginOpen(true)}
              className="p-3 bg-gray-100 rounded-full hover:bg-red-100 text-gray-700 hover:text-red-500 cursor-pointer text-lg"
            >
              <FaUser />
            </div>

            {/* WISHLIST */}
            <div
              onClick={() => navigate("/wishlist")}
              className="relative p-3 bg-gray-100 rounded-full hover:bg-red-100 text-gray-700 hover:text-red-500 cursor-pointer text-lg"
            >
              <FaHeart />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {wishlist.length}
                </span>
              )}
            </div>

            {/* CART */}
            <div
              onClick={() => setCartOpen(true)}
              className="relative p-3 bg-gray-100 rounded-full hover:bg-red-100 text-gray-700 hover:text-red-500 cursor-pointer text-lg"
            >
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden fixed top-20 left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 py-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 px-6">
            <span onClick={() => navigate("/")} className="hover:text-red-500">
              Home
            </span>

            <span
              onClick={() => navigate("/about")}
              className="hover:text-red-500"
            >
              About
            </span>

            <span
              onClick={() => navigate("/shop")}
              className="hover:text-red-500"
            >
              Shop
            </span>

            {/* COLLECTION MOBILE */}
            <div>
              <button
                onClick={() => setCollectionOpen(!collectionOpen)}
                className="flex items-center justify-between w-full font-semibold"
              >
                Collection
                <span
                  className={`transform transition-transform ${
                    collectionOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {collectionOpen && (
                <div className="ml-4 mt-3 space-y-2">
                  <p
                    onClick={() => {
                      navigate("/collection/men");
                      setIsOpen(false);
                      setCollectionOpen(false);
                    }}
                    className="hover:text-red-500 cursor-pointer"
                  >
                    Men Collection
                  </p>

                  <p
                    onClick={() => {
                      navigate("/collection/women");
                      setIsOpen(false);
                      setCollectionOpen(false);
                    }}
                    className="hover:text-red-500 cursor-pointer"
                  >
                    Women Collection
                  </p>

                  <p
                    onClick={() => {
                      navigate("/collection/kids");
                      setIsOpen(false);
                      setCollectionOpen(false);
                    }}
                    className="hover:text-red-500 cursor-pointer"
                  >
                    Kid Collection
                  </p>
                </div>
              )}
            </div>

            <span
              onClick={() => navigate("/blog")}
              className="hover:text-red-500"
            >
              Blog
            </span>

            <span
              onClick={() => navigate("/contact")}
              className="hover:text-red-500"
            >
              Contact
            </span>
          </nav>
        </div>
      </header>

      {/* LOGIN MODAL */}
      {loginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 w-80 rounded relative">
            <button
              className="absolute top-2 right-2"
              onClick={() => setLoginOpen(false)}
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
            <input
              className="border px-3 py-2 w-full mb-2"
              placeholder="Email"
            />
            <input
              className="border px-3 py-2 w-full mb-4"
              placeholder="Password"
              type="password"
            />
            <button className="bg-red-500 text-white py-2 w-full hover:bg-red-600">
              Login
            </button>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 flex flex-col ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold">Your Cart ({cart.length})</h2>
          <button onClick={() => setCartOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* CART ITEMS */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">No items in cart.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FaTimes />
                </button>
              </div>
            ))
          )}
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="bg-red-500 text-white py-2 px-4 hover:bg-red-600"
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default Header;
