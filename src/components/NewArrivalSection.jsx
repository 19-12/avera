import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import NewArrivalProductCard from "./NewArrivalProductCard";
import bannerImg from "/src/assets/images/products/women-large.jpg";
import p1 from "../assets/images/products/p1.jpg";
import p2 from "../assets/images/products/p2.jpg";
import p3 from "../assets/images/products/p3.jpg";
import p4 from "../assets/images/products/p4.jpg";
import p5 from "../assets/images/products/p5.jpg";


// PRODUCTS DATA
const products = [
  {
    id: 101,
    image: p1,
    title: "Guangzhou sweater",
    price: 13,
    category: "Shoes",
  },
  {
    id: 102,
    image: p4,
    title: "Pure Pineapple",
    price: 34,
    category: "Towel",
  },
  {
    id: 103,
    image: p3,
    title: "Converse Shoes",
    price: 29,
    category: "Shoes",
  },
  {
    id: 104,
    image: p2,
    title: "Stylish Handbag",
    price: 45,
    category: "HandBag",
  },
  {
    id: 105,
    image: p5,
    title: "Elegant Dress",
    price: 55,
    category: "Clothing",
  },
];

const NewArrivalSection = () => {
  const handleAddToCart = (product) => {
    console.log("Add to cart:", product);
  };

  const handleAddToWish = (product) => {
    console.log("Add to wishlist:", product);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* RIGHT SIDE — BIG BANNER IMAGE */}
      
      <div className="lg:col-span-4">
  <div className="group h-[520px] rounded-xl overflow-hidden relative flex items-center justify-center text-white">

    {/* 🔹 IMAGE LAYER (only this will zoom) */}
    <div
      className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>

    {/* 🔹 DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/40"></div>

    {/* 🔹 CONTENT (center, no zoom) */}
    <div className="relative z-10 text-center">
      <h3 className="text-5xl font-extrabold mb-6 tracking-wide">
        Women’s
      </h3>

      <a
        href="#"
        className="inline-block border-b-2 border-white text-lg font-semibold hover:text-pink-300 transition"
      >
        Discover More
      </a>
    </div>
  </div>
</div>


          {/* LEFT SIDE — SLIDER */}
          <div className="lg:col-span-8">

            {/* HEADING */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold">New Arrival</h2>
              <p className="text-gray-500 mt-2">
                Discover our latest mixed collection
              </p>
            </div>

            {/* SLIDER */}
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={30}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {products.map((item) => (
                <SwiperSlide key={item.id}>
                  <NewArrivalProductCard
                    product={item}
                    onAddCart={handleAddToCart}
                    onAddWish={handleAddToWish}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        

        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;
