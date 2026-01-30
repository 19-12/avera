import { FaHeart, FaShoppingBag, FaEye } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const NewArrivalProductCard = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useCart();
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  // CHECK IF IN WISHLIST
  const inWishlist = wishlist.find((item) => item.id === product.id);

  return (
    <>
      <div className="group relative bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

        {/* IMAGE AREA */}
        <div className="relative overflow-hidden">

          {/* ❤️ Wishlist Icon */}
          <button
            onClick={() =>
              inWishlist
                ? removeFromWishlist(product.id)
                : addToWishlist(product)
            }
            className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow 
            opacity-0 group-hover:opacity-100 transition"
          >
            <FaHeart
              className={`${
                inWishlist ? "text-red-500" : "text-gray-600 hover:text-[rgb(200_40_30_/_0.85)]"
              }`}
            />
          </button>

          <img
            src={product.image}          // 🔥 SAME AS OLD SYSTEM
            alt={product.title}
            className="w-full h-[340px] object-cover transition duration-300 group-hover:scale-110"
          />

          {/* Bottom Hover Buttons */}
          <div
            className="absolute bottom-0 left-0 w-full flex justify-center gap-3 pb-4 
            opacity-0 group-hover:opacity-100 transition"
          >
            {/* 🛒 Add to Cart */}
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 bg-[rgb(200_40_30_/_0.85)] text-white px-4 py-2 
              rounded-full hover:bg-black transition"
            >
              <FaShoppingBag /> Add to Cart
            </button>

            {/* 👁 Quick View */}
            <button
              onClick={() => setQuickViewOpen(true)}
              className="bg-white text-gray-700 p-3 rounded-full shadow 
              hover:text-[rgb(200_40_30_/_0.85)] transition"
            >
              <FaEye />
            </button>
          </div>
        </div>

        {/* TEXT */}
        <div className="p-4 text-center">
          <p className="text-xs text-gray-800 uppercase mb-1">
            {product.category}
          </p>

          <h4 className="font-semibold hover:text-[rgb(200_40_30_/_0.85)] cursor-pointer">
            {product.title}
          </h4>

          <p className="text-[rgb(200_40_30_/_0.85)] text-2xl font-bold mt-2">
            ${product.price}
          </p>
        </div>
      </div>

      {/* 🔍 QUICK VIEW MODAL */}
      {quickViewOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] relative">

            <button
              onClick={() => setQuickViewOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              ✕
            </button>

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded mb-4"
            />

            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
            <p className="text-gray-500 mb-2">{product.category}</p>
            <p className="text-[rgb(200_40_30_/_0.85)] text-lg font-bold mb-4">
              ${product.price}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-[rgb(200_40_30_/_0.85)] text-white py-2 rounded hover:bg-black-700 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() =>
                  inWishlist
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product)
                }
                className={`w-12 h-12 flex items-center justify-center rounded transition
                  ${
                    inWishlist
                      ? "bg-red-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewArrivalProductCard;
