import br1 from "../assets/images/br1.png";
import br2 from "../assets/images/br2.png";
import br3 from "../assets/images/br3.png";
import br4 from "../assets/images/br4.png";
import br5 from "../assets/images/br5.png";

const BrandSection = () => {
  const brands = [
    { id: 1, img: br1, link: "#" },
    { id: 2, img: br2, link: "#" },
    { id: 3, img: br3, link: "#" },
    { id: 4, img: br4, link: "#" },
    { id: 5, img: br5, link: "#" },
  ];

  return (
    <section className="py-10 bg-[#dedede]">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {brands.map((brand) => (
              <a
                key={brand.id}
                href={brand.link}
                className="flex items-center justify-center group"
              >
                <img
                  src={brand.img}
                  alt={`Brand ${brand.id}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-16 object-contain grayscale group-hover:grayscale-0 transition duration-300 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
