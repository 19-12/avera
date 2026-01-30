import React from "react";
import { useCart } from "../context/CartContext";
import { FaTimes, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 lg:px-24 py-20">
      <h1 className="text-4xl py-10 font-bold mb-10 text-center">
        Your Cart
      </h1>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-6">
          <FaShoppingBag className="text-6xl text-gray-300" />
          <p className="text-xl text-gray-500">
            Your cart is empty.
          </p>

          <button
            onClick={() => navigate("/shop")}
            className="mt-4 px-8 py-3 bg-black text-white text-sm uppercase tracking-wide
                       hover:bg-green-700 transition duration-300"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 items-center border rounded-lg p-4
                           hover:shadow-lg transition duration-300"
              >
                {/* IMAGE */}
                <div className="w-28 h-28 bg-gray-100 flex items-center justify-center rounded">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>

                {/* INFO */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    ${item.price}
                  </p>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  <FaTimes size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* ✅ CHECKOUT BUTTON */}
          <div className="max-w-4xl mx-auto mt-10">
            <button
              onClick={() => navigate("/checkout")}
              className="w-full py-4 bg-black text-white text-lg font-semibold
                         hover:bg-green-700 transition duration-300"
            >
              Go to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
