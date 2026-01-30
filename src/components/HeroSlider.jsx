import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";




import "swiper/css";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <section className="hero-section relative">
    <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 4000 }}
  loop={true}
  pagination={{ clickable: true }}
  className="h-screen"
>

        {/* Slide 1 */}
        <SwiperSlide>
    <div
    className="h-screen bg-cover bg-center flex items-center"
    style={{ backgroundImage: `url(${slide1})` }}
  >

            <div className="max-w-[800px] h-screen pt-28 lg:pt-40 items-center bg-cover bg-right px-6 lg:px-24 pl-10 lg:pl-32">
              <span className="text-2xl text-white block mb-3">
                Feel The Rhythm.
              </span>

              <h1 className="font-bold text-orange text-4xl lg:text-6xl mb-5">
                Walk Up Your Passion
                <span className="block mt-3">Listen Good Music.</span>
              </h1>

              <hr className="w-16 h-1 bg-orange mb-6 border-0" />

              <p className="text-primary mb-8">
                Experience the decibels like your ears deserve to.
              </p>

              <button className="group flex items-center gap-3 bg-[#0A2540] text-[#FF6A3D] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#081E33]">
  Explore More
  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
    🛒
  </span>
</button>

            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
                 <div
    className="h-screen bg-cover bg-center flex items-center"
    style={{ backgroundImage: `url(${slide2})` }}
  >
            <div className="max-w-[800px] h-screen pt-28 lg:pt-40 items-center bg-cover bg-right px-6 lg:px-24 pl-10 lg:pl-32">
              <span className="text-2xl text-white text-primary block mb-3">
                Feel The Rhythm.
              </span>

              <h1 className="font-bold text-orange text-4xl lg:text-6xl mb-5">
                Spark Up Your Passion
                <span className="block mt-3">With Good Music.</span>
              </h1>

              <hr className="w-16 h-1 bg-orange mb-6 border-0" />

              <p className="text-primary mb-8">
                Safe for the ears, very for the heart.
              </p>

                <button className="group flex items-center gap-3 bg-[#0A2540] text-[#FF6A3D] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#081E33]">
  Explore More
  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
    🛒
  </span>
</button>
            </div>
          </div>
        </SwiperSlide>

  {/* Slide 3 */}
        <SwiperSlide>
                <div
    className="h-screen bg-cover bg-center flex items-center"
    style={{ backgroundImage: `url(${slide3})` }}
  >
            <div className="max-w-[800px] h-screen pt-28 lg:pt-40 items-center bg-cover bg-right px-6 lg:px-24 pl-10 lg:pl-32">
              <span className="text-2xl text-white text-primary block mb-3">
                Feel The Rhythm.
              </span>

              <h1 className="font-bold text-orange text-4xl lg:text-6xl mb-5">
                Spark Up Your Passion
                <span className="block mt-3">With Good Music.</span>
              </h1>

              <hr className="w-16 h-1 bg-orange mb-6 border-0" />

              <p className="text-primary mb-8">
                Safe for the ears, very for the heart.
              </p>

                <button className="group flex items-center gap-3 bg-[#0A2540] text-[#FF6A3D] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#081E33]">
  Explore More
  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
    🛒
  </span>
</button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}
