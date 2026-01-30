const banners = [
  {
    id: 1,
    title: "Men’s",
    img: "/img/banner-1.jpg",
  },
  {
    id: 2,
    title: "Women’s",
    img: "/img/banner-2.jpg",
  },
  {
    id: 3,
    title: "Kid’s",
    img: "/img/banner-3.jpg",
  },
];

const BannerSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {banners.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-md"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[280px] object-cover"
              />

              {/* Border on hover */}
              <div className="absolute inset-6 border-4 border-white opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-in-out"></div>

              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white text-black px-8 py-3 text-xl font-semibold tracking-wide shadow-md transition-all duration-500 group-hover:scale-105">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
