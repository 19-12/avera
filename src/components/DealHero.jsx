import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import heroBg from "/src/assets/images/hero_bg_1.jpg";

const slides = [
  {
    subtitle: "Limited Offers 20% OFF",
    title: "Men Collection",
    desc: "Discover premium styles crafted for modern men. Limited-time deals you can’t miss.",
  },
  {
    subtitle: "New Season Sale",
    title: "Women Collection",
    desc: "Elegant, trendy, and timeless fashion curated just for women.",
  },
  {
    subtitle: "Special Discount",
    title: "Kids Collection",
    desc: "Cute, comfy, and playful outfits your kids will love to wear.",
  },
];

const DealHero = () => {
  return (
    <section
      className="relative h-[700px] bg-fixed bg-top bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* 🔹 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔹 TEXT SLIDER */}
      <div className="relative z-10 w-full flex justify-center px-6">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          className="w-full flex justify-center"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <div
                  className="
                    text-center 
                    bg-black/60 
                    p-10 
                    rounded-xl 
                    text-white 
                    shadow-2xl
                    w-[600px]
                  "
                >
                  <span className="uppercase tracking-widest text-sm text-pink-300">
                    {item.subtitle}
                  </span>

                  <h2 className="text-5xl font-extrabold mt-4 mb-6 leading-tight">
                    {item.title}
                  </h2>

                  <p className="text-gray-200 mb-8 leading-relaxed">
                    {item.desc}
                  </p>

                  <a
                    href="#"
                    className="inline-block bg-white text-black px-8 py-3 font-semibold rounded hover:bg-pink-500 hover:text-white transition"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DealHero;
