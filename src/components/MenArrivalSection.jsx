import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import NewArrivalProductCard from "./NewArrivalProductCard";
import menBannerImg from "/src/assets/images/products/men-large.jpg";
import m1 from "../assets/images/products/m1.jpg";
import m2 from "../assets/images/products/m2.jpg";
import m3 from "../assets/images/products/m3.jpg";
import m4 from "../assets/images/products/m4.jpg";
import m5 from "../assets/images/products/m5.jpg";


// 🔥 MEN PRODUCTS DATA
const menProducts = [
  {
    id: 201,
    image: m1,
    title: "Classic Men's Jacket",
    price: 49,
    category: "Clothing",
  },
  {
    id: 202,
    image: m2,
    title: "Leather Backpack",
    price: 39,
    category: "HandBag",
  },
  {
    id: 203,
    image: m3,
    title: "Men Sneakers",
    price: 29,
    category: "Shoes",
  },
  {
    id: 204,
    image: m4,
    title: "Casual Shirt",
    price: 25,
    category: "Clothing",
  },
  {
    id: 205,
    image: m5,
    title: "Formal Watch",
    price: 65,
    category: "Accessories",
  },
];


const MenArrivalSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* LEFT SIDE — SLIDER */}
          <div className="lg:col-span-8">

            {/* HEADING */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold">New Arrival</h2>
              <p className="text-gray-500 mt-2">
                Discover our latest men’s collection
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
              {menProducts.map((item) => (
                <SwiperSlide key={item.id}>
                  <NewArrivalProductCard product={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT SIDE — BIG BANNER */}
          <div className="lg:col-span-4">
            <div className="group h-[520px] rounded-xl overflow-hidden relative flex items-center justify-center text-white">

              {/* IMAGE */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${menBannerImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/40"></div>

              {/* CONTENT */}
              <div className="relative z-10 text-center">
                <h3 className="text-5xl font-extrabold mb-6 tracking-wide">
                  Men’s
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

        </div>
      </div>
    </section>
  );
};

export default MenArrivalSection;
