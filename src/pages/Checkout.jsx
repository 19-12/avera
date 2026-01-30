import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    cardType: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
    billingSame: true,
    agree: false,
  });

  /* 🔹 INPUT HANDLER */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* 🔹 EMPTY CART GUARD */
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/shop");
    }
  }, [cart, navigate]);

  /* 🔹 PLACE ORDER */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty. Please add products first.");
      return;
    }

    if (!form.firstName || !form.lastName)
      return alert("Name required");

    if (!form.address || !form.city || !form.state || !form.zip)
      return alert("Shipping address required");

    if (!form.billingSame) {
      if (
        !form.billingAddress ||
        !form.billingCity ||
        !form.billingState ||
        !form.billingZip
      ) {
        return alert("Billing address required");
      }
    }

    if (!form.cardType || !form.cardNumber || !form.expMonth || !form.expYear || !form.cvv)
      return alert("Payment details incomplete");

    if (!form.agree) return alert("Please accept Terms & Privacy Policy");

    // ❌ Card number validation
if (form.cardNumber.length !== 16) {
  return alert("Card number must be 16 digits");
}

if (/^0{16}$/.test(form.cardNumber)) {
  return alert("Invalid card number");
}

// ❌ CVV
if (form.cvv.length !== 3) {
  return alert("Invalid CVV");
}

// ❌ Expiry validation
const currentYear = new Date().getFullYear() % 100;
const currentMonth = new Date().getMonth() + 1;

if (
  +form.expYear < currentYear ||
  (+form.expYear === currentYear && +form.expMonth < currentMonth)
) {
  return alert("Card has expired");
}

    navigate("/order-success");
  };

  return (
    <div className="container mx-auto px-6 lg:px-24 py-32">
      <h1 className="text-3xl font-bold text-center mb-10">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT FORM */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">

          {/* SHIPPING */}
          <div className="border p-6 rounded">
            <h3 className="bg-black text-white px-4 py-2 mb-6">
              Shipping Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="firstName" placeholder="First Name" className="input" onChange={handleChange} />
              <input name="lastName" placeholder="Last Name" className="input" onChange={handleChange} />
              <input name="address" placeholder="Address" className="input md:col-span-2" onChange={handleChange} />
              <input name="city" placeholder="City" className="input" onChange={handleChange} />
              <input name="state" placeholder="State" className="input" onChange={handleChange} />
              <input name="zip" placeholder="ZIP Code" className="input" onChange={handleChange} />
              <input name="phone" placeholder="Phone" className="input" onChange={handleChange} />
              <input name="email" placeholder="Email" className="input md:col-span-2" onChange={handleChange} />
            </div>

            <label className="flex gap-2 mt-4 text-sm">
              <input
                type="checkbox"
                name="billingSame"
                checked={form.billingSame}
                onChange={handleChange}
              />
              Billing address same as shipping
            </label>

            {/* BILLING ADDRESS */}
            <div
              className={`transition-all duration-500 overflow-hidden ${
                form.billingSame ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100 mt-6"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="billingAddress" placeholder="Billing Address" className="input md:col-span-2" onChange={handleChange} />
                <input name="billingCity" placeholder="City" className="input" onChange={handleChange} />
                <input name="billingState" placeholder="State" className="input" onChange={handleChange} />
                <input name="billingZip" placeholder="ZIP Code" className="input" onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="border p-6 rounded">
            <h3 className="bg-black text-white px-4 py-2 mb-6">
              Payment Details
            </h3>

            <div className="flex gap-4 mb-4">
              <img src="/img/cart.png" height="28" />
             
            </div>

            <select name="cardType" className="input mb-3" onChange={handleChange}>
              <option value="">Select Payment Method</option>
              <option value="visa">Visa</option>
              <option value="master">MasterCard</option>
              <option value="discover">Discover</option>
            </select>

           <input
  name="cardNumber"
  placeholder="Card Number"
  className="input mb-3"
  maxLength={16}
  inputMode="numeric"
  value={form.cardNumber}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 16) {
      setForm({ ...form, cardNumber: value });
    }
  }}
/>



            <div className="grid grid-cols-3 gap-4 mb-3">
             <input
  name="expMonth"
  placeholder="MM"
  className="input"
  maxLength={2}
  value={form.expMonth}
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value === "" || (+value >= 1 && +value <= 12)) {
      setForm({ ...form, expMonth: value });
    }
  }}
/>
 
             <input
  name="expYear"
  placeholder="YY"
  className="input"
  maxLength={4}
  value={form.expYear}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    setForm({ ...form, expYear: value });
  }}
/>
 
              <input
  name="cvv"
  placeholder="CVV"
  className="input"
  maxLength={3}
  value={form.cvv}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 3) {
      setForm({ ...form, cvv: value });
    }
  }}
/>

            </div>

            <label className="flex gap-2 text-sm mt-3">
              <input type="checkbox" name="agree" onChange={handleChange} />
              I agree to Terms & Privacy Policy
            </label>

            <button
              type="submit"
              className="mt-6 w-full py-4 text-lg font-semibold rounded bg-pink-600 text-white hover:bg-pink-700 transition"
            >
              Place Order
            </button>
          </div>
        </form>

        {/* RIGHT SUMMARY */}
        <div className="border p-6 rounded bg-gray-50 h-fit">
          <h3 className="bg-black text-white px-4 py-2 mb-6">
            Order Summary
          </h3>

          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 border-b pb-3 mb-3">
              <div className="flex items-center gap-3">
                <img src={item.image} className="w-14 h-14 object-cover border" />
                <p className="text-sm font-medium">{item.title}</p>
              </div>
              <span className="font-semibold">${item.price.toFixed(2)}</span>
            </div>
          ))}

          <div className="flex justify-between text-sm mt-3">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>

          <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t">
            <span>Total</span>
            <span className="text-pink-600">${total.toFixed(2)}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
