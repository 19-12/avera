import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-6 lg:px-24 py-32 text-center">
      <FaCheckCircle className="text-green-600 text-7xl mx-auto mb-6" />

      <h1 className="text-4xl font-bold mb-4">
        Order Placed Successfully!
      </h1>

      <p className="text-gray-600 text-lg mb-10">
        Thank you for your purchase. Your order is being processed.
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => navigate("/shop")}
          className="px-8 py-3 bg-black text-white
                     hover:bg-green-700 transition duration-300"
        >
          Continue Shopping
        </button>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 border hover:bg-gray-100"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
