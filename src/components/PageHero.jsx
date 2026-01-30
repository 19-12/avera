import bannerImg from "../assets/images/categories-banner.jpg";

const PageHero = ({ title }) => {
  return (
    <div className="relative w-full h-[70vh]">

      {/* Background Image */}
      <img
        src={bannerImg}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-serif tracking-wide">
          {title}
        </h1>
      </div>

    </div>
  );
};

export default PageHero;
