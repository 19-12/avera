import log1 from "../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] pt-16 text-gray-300">

      {/* FOOTER TOP */}
      <div className="container mx-auto px-6 lg:px-24">
        <div className="bg-white rounded-2xl p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

            {/* LOGO + ABOUT */}
            <div className="lg:col-span-2">
              <div className="mb-4 w-[110px]">
                <a href="/">
                  <img
                    src={log1}
                    alt="Krishna Design"
                    className="w-full"
                  />
                </a>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Krishna Design and Boutique, nestled in the lively center of Gurgaon,
                celebrates the timeless charm of Indian ethnic wear.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/p/Krishna-designs-and-boutique-100064214072582/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:bg-pink-600 transition"
                >
                  f
                </a>
                <a
                  href="https://www.instagram.com/krishanadesigns/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:bg-pink-600 transition"
                >
                  i
                </a>
                <a
                  href="https://www.youtube.com/c/Krishnadesignsandboutique"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:bg-pink-600 transition"
                >
                  y
                </a>
              </div>
            </div>

            {/* CATEGORIES */}
            <div>
              <h4 className="text-red-500 font-semibold mb-4 uppercase tracking-wide">
                Categories
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Sarees", link: "/collections/sarees" },
                  { name: "Suits", link: "/collections/suits" },
                  { name: "Lehenga", link: "/collections/lehenga" },
                  { name: "Winter Collection", link: "/collections/winter-collection" },
                  { name: "Readymade", link: "#" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-pink-600 transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* IMPORTANT LINKS */}
            <div>
              <h4 className="text-red-500 font-semibold mb-4 uppercase tracking-wide">
                Important Links
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Home", link: "/" },
                  { name: "About Us", link: "/about" },
                  { name: "Blogs", link: "#" },
                  { name: "Shop", link: "/shop" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-pink-600 transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* HELP */}
            <div>
              <h4 className="text-red-500 font-semibold mb-4 uppercase tracking-wide">
                Help
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Privacy Policy", link: "/privacy-policy" },
                  { name: "Terms & Conditions", link: "/terms-conditions" },
                  { name: "Return & Refund Policy", link: "/return-refund-policy" },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-pink-600 transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* GET IN TOUCH */}
            <div>
              <h4 className="text-red-500 font-semibold mb-4 uppercase tracking-wide">
                Get In Touch
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
                <li>
                  Address : Krishna designs and boutique, entry no. 3,
                  Sector 23A, N Block, Om Vihar, West zone, Gurugram,
                  Haryana 122017
                </li>
                <li>
                  <a
                    href="mailto:thekrishnadesignhelp@gmail.com"
                    className="hover:text-pink-600 transition"
                  >
                    Email : thekrishnadesignhelp@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:9310206014"
                    className="hover:text-pink-600 transition"
                  >
                    Phone : +91 9310206014
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="mt-10 border-t border-gray-700 py-6">
        <div className="container mx-auto px-6 lg:px-24 text-center text-sm text-gray-400">
          Copyright © All rights reserved by{" "}
          <a
            href="https://thekrishnadesign.com/"
            className="text-red-500 hover:text-pink-600 transition"
            target="_blank"
            rel="noreferrer"
          >
         Design Aparna 
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
