import { FaPlus, FaHeart } from "react-icons/fa";

const ProductCard = ({ product, onAddCart, onAddWish }) => {
  return (
    <div className="group">
      {/* IMAGE AREA */}
      <div className="relative overflow-hidden">
        {/* Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full transition-transform duration-500 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* Plus Icon */}
        <button
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
        >
          <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white text-xl hover:bg-white hover:text-black transition">
            <FaPlus />
          </div>
        </button>
      </div>

      {/* PRODUCT INFO */}
      <div className="text-center mt-4">
        <h4 className="text-lg font-semibold">{product.title}</h4>
        <p className="text-xl font-bold">${product.price}</p>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => onAddCart(product)}
            className="px-5 py-2 bg-black text-white text-sm hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

          <button
            onClick={() => onAddWish(product)}
            className="w-10 h-10 border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;
