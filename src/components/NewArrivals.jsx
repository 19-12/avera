import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { FaShoppingBag } from "react-icons/fa";

const products = [
  { id: 1, category: "women", image: "/img/product-img/product-1.jpg", price: 39.9, title: "Dress" },
  { id: 2, category: "women", image: "/img/product-img/product-2.jpg", price: 39.9, title: "Dress" },
  { id: 3, category: "access", image: "/img/product-img/product-3.jpg", price: 39.9, title: "Bag" },
  { id: 4, category: "shoes", image: "/img/product-img/product-4.jpg", price: 39.9, title: "Shoes" },
  { id: 5, category: "kids", image: "/img/product-img/product-5.jpg", price: 39.9, title: "Kids Wear" },
  { id: 6, category: "man", image: "/img/product-img/product-6.jpg", price: 39.9, title: "Mens Wear" },
];

export default function NewArrivals() {
  const [active, setActive] = useState("all");
  const { cart, wishlist, addToCart, addToWishlist, removeFromWishlist } = useCart();

  // Filter products based on category
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section className="py-20">
      <h2 className="text-center text-4xl font-bold mb-10">New Arrivals</h2>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-12 px-4">
        {["all", "women", "man", "access", "shoes", "kids"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`uppercase tracking-widest text-sm sm:text-base transition ${
              active === cat
                ? "font-bold underline underline-offset-8"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="border rounded-md overflow-hidden flex flex-col hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div className="h-[650px] overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>

            {/* INFO & ACTIONS */}
            <div className="text-center px-4 py-4 flex flex-col gap-3">
              <h4 className="text-lg font-semibold">{product.title}</h4>
              <p className="text-xl font-bold">${product.price}</p>

              <div className="flex justify-center gap-4 mt-2">
                {/* ADD TO CART BUTTON */}
          

<button
  onClick={() => addToCart(product)}
  className={`px-5 py-2 rounded-md text-white text-sm transition flex items-center gap-2 ${
    cart.find((item) => item.id === product.id)
      ? "bg-red-600 hover:bg-red-700"
      : "bg-black hover:bg-gray-800"
  }`}
>
  {!cart.find((item) => item.id === product.id) && <FaShoppingBag />}
  {cart.find((item) => item.id === product.id) ? "In Cart" : "Add to Cart"}
</button>


                {/* WISHLIST BUTTON */}
                <button
                  onClick={() =>
                    wishlist.find((item) => item.id === product.id)
                      ? removeFromWishlist(product.id)
                      : addToWishlist(product)
                  }
                  className={`w-10 h-10 rounded-md border flex items-center justify-center transition ${
                    wishlist.find((item) => item.id === product.id)
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
