import { FaTimes, FaHeart } from "react-icons/fa";

const ProductModal = ({ product, close }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-4xl relative p-6 grid md:grid-cols-2 gap-6">

        {/* CLOSE */}
        <button
          onClick={close}
          className="absolute right-4 top-4 text-xl"
        >
          <FaTimes />
        </button>

        {/* IMAGE */}
        <img src={product.image} className="w-full" />

        {/* DETAILS */}
        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-xl font-semibold mt-2">${product.price}</p>

          <p className="text-gray-600 mt-4">
            {product.description}
          </p>

          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-[rgb(200 40 30 / 0.85)] text-white">
              Add to Cart
            </button>
            <button className="p-3 border">
              <FaHeart />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductModal;
