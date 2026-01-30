import React from "react";
import { useCart } from "../context/CartContext";
import { FaTimes, FaShoppingCart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, cart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 lg:px-24 py-24">
      {/* TITLE */}
      <h1 className="text-4xl py-20 font-bold mb-12 text-center">
        Your Wishlist
      </h1>

      {/* EMPTY WISHLIST */}
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center gap-6 py-20">
          <FaHeart className="text-6xl text-gray-300" />
          <p className="text-xl text-gray-500">
            Your wishlist is empty.
          </p>
        </div>
      ) : (
        /* WISHLIST GRID */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-5 bg-white
                         hover:shadow-xl hover:-translate-y-1
                         transition duration-300"
            >
              {/* IMAGE */}
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO */}
              <h3 className="font-semibold text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-red-500 font-bold mb-4">
                ${item.price}
              </p>

              {/* ACTIONS */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-gray-200 text-red-500 px-4 py-2 rounded
                             hover:bg-red-100 transition"
                >
                  <FaTimes className="inline mr-1" />
                  Remove
                </button>

                <button
                  onClick={() => addToCart(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded
                             hover:bg-red-600 transition"
                >
                  <FaShoppingCart className="inline mr-1" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* GO TO CART */}
      {cart.length > 0 && (
        <div className="flex justify-center mt-14">
          <button
            onClick={() => navigate("/cart")}
            className="bg-blue-500 text-white px-6 py-3 rounded
                       hover:bg-blue-600 transition"
          >
            Go to Cart ({cart.length})
          </button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
