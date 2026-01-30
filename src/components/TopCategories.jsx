import { Link } from "react-router-dom";
import bg2 from "../assets/images/bg-2.jpg";
import bg3 from "../assets/images/bg-3.jpg";

export default function TopCategories() {
  return (
    <section className="flex flex-col md:flex-row gap-4 overflow-hidden">
      
      {/* Category 1 */}
    <div className="relative flex-1 overflow-hidden rounded-md">
  <div
    className="group relative flex h-[380px] rounded-md w-full items-center bg-cover bg-center transition-transform duration-700 ease-out hover:scale-110"
    style={{ backgroundImage: `url(${bg2})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 transition-all duration-700 group-hover:bg-[rgb(200_40_30_/_0.85)]"></div>

    {/* Content */}
    <div className="relative z-10 px-10 ml-[50px] text-white">
      <h6 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] opacity-90">
        On Accessories
      </h6>

      <h2 className="mb-6 text-5xl font-extrabold leading-tight tracking-wide">
        SALE <br /> 30%
      </h2>

      <Link
        to="/shop"
        className="inline-block border-2 border-white px-8 py-3 text-xs font-bold tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-black"
      >
        SHOP NOW
      </Link>
    </div>
  </div>
</div>


      {/* Category 2 */}
  <div className="relative flex-1 overflow-hidden rounded-md">
  <div
    className="group relative flex h-[380px] rounded-md w-full items-center bg-cover bg-center transition-transform duration-700 ease-out hover:scale-110"
    style={{ backgroundImage: `url(${bg3})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[rgb(230_55_39_/_0.51)] transition-all duration-700 group-hover:bg-[rgb(200_40_30_/_0.85)]"></div>


    {/* Content */}
    <div className="relative z-10 px-10 ml-[50px] text-white">
      <h6 className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] opacity-90">
        On Accessories
      </h6>

     <h2 className="mb-6 text-5xl font-extrabold tracking-wide">
  DESIGNER <br /> BAGS
</h2>


      <Link
        to="/shop"
        className="inline-block border-2 border-white px-8 py-3 text-xs font-bold tracking-[0.25em] transition-all duration-300 hover:bg-white hover:text-black"
      >
        SHOP NOW
      </Link>
    </div>
  </div>
</div>


    </section>
  );
}
