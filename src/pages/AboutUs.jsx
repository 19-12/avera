import React from "react";
import PageHero from "../components/PageHero";
import bg1 from "../assets/images/bg_1.jpg";
import bg2 from "../assets/images/bg_2.jpg";
import bg3 from "../assets/images/bg_3.jpg";
import bg4 from "../assets/images/bg_4.jpg";
import bg5 from "../assets/images/target.png";
import bg6 from "../assets/images/visionary.png";
import bg7 from "../assets/images/popup.jpg";   

const AboutUs = () => {
  return (
    <div className="w-full">
      <PageHero title="About Us" />

      {/* HERO SECTION */}

      {/* OUR INSPIRATIONAL JOURNEY */}
      <div className="container mx-auto px-6 lg:px-24 py-20 grid md:grid-cols-3 gap-10 items-center">
        <div className="md:col-span-1">
          <h2 className="text-4xl font-serif mb-6">Our Inspirational Journey</h2>
          <p className="text-gray-700 leading-7">
            The story of Krishna Design and Boutique is one of passion,
            dedication, and a relentless pursuit of excellence. Founded by
            visionary leaders, our boutique was born out of a shared love for
            fashion and a desire to redefine traditional attire.
          </p>
        </div>

        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
           {/* bg-1 */}
  <div className="w-full h-[420px] overflow-hidden rounded-md">
    <img
      src={bg1}
      alt=""
      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
    />
  </div>

  {/* bg-2 */}
  <div className="w-full h-[420px] overflow-hidden rounded-md">
    <img
      src={bg2}
      alt=""
      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
    />
  </div>
        </div>
      </div>

      {/* CELEBRATE TRADITION */}
      <div className="container mx-auto px-6 lg:px-24 py-20 grid md:grid-cols-3 gap-10 items-center">
       <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
           {/* bg-1 */}
  <div className="w-full h-[420px] overflow-hidden rounded-md">
    <img
      src={bg3}
      alt=""
      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
    />
  </div>

  {/* bg-2 */}
  <div className="w-full h-[420px] overflow-hidden rounded-md">
    <img
      src={bg4}
      alt=""
      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
    />
  </div>
        </div>

        <div>
          <h2 className="text-4xl font-serif mb-6">
            Lets Celebrate <br /> Tradition In Style
          </h2>
          <p className="text-gray-700 leading-7">
            Discover timeless ethnic wear for every generation. From elegant
            sarees to festive ensembles, we bring you fashion that honors
            tradition while keeping it stylish and comfortable.
          </p>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="container mx-auto px-6 lg:px-24 py-10 grid md:grid-cols-2 gap-10">
        <div className="bg-white shadow-lg rounded-xl p-10 text-center">
          <img src={bg5} className="mx-auto mb-6 w-20" />
          <h3 className="text-2xl font-serif mb-4">Our Vision</h3>
          <p className="text-gray-700">
            To be the premier destination for exquisite Indian ethnic wear,
            blending tradition with contemporary elegance.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-10 text-center">
          <img src={bg6} className="mx-auto mb-6 w-20" />
          <h3 className="text-2xl font-serif mb-4">Our Mission</h3>
          <p className="text-gray-700">
            Empower individuals to express their unique identity through
            thoughtfully crafted ethnic fashion.
          </p>
        </div>
      </div>

      {/* EXPLORING INDIAN ELEGANCE */}
   <div className="container mx-auto px-6 lg:px-24 py-20 grid md:grid-cols-2 gap-10 items-center">

  {/* Image Wrapper */}
  <div className="w-full h-full overflow-hidden rounded-md">
    <img
      src={bg7}
      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
      alt=""
    />
  </div>

  {/* Content */}
  <div>
    <h2 className="text-4xl font-serif mb-6">
      Exploring Indian Elegance
    </h2>
    <p className="text-gray-700 mb-6">
      Our collection reflects India’s rich culture with designs crafted
      for weddings, festivals, and everyday elegance.
    </p>

    <div className="space-y-4">
      <div>
        <h3 className="text-3xl font-bold">200K+</h3>
        <p className="text-gray-600">Happy Customers</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold">1.2M+</h3>
        <p className="text-gray-600">Product Sales</p>
      </div>
    </div>
  </div>

</div>


      {/* BOTTOM CONTENT */}
      <div className="container mx-auto px-6 lg:px-24 py-10 space-y-10">
        <div>
          <h3 className="text-2xl font-serif mb-2">Discover Us Today</h3>
          <p className="text-gray-700">
            Experience the magic of Indian ethnic wear at Krishna Design and
            Boutique and enjoy a premium shopping experience.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif mb-2">Connect With Us</h3>
          <p className="text-gray-700">
            Reach us anytime for assistance. Your satisfaction is our priority.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-serif mb-2">Join Our Family</h3>
          <p className="text-gray-700">
            Become a part of our journey and celebrate tradition with timeless
            style.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
