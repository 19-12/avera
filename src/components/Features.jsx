import { BsTruck, BsShieldLock, BsArrowCounterclockwise } from "react-icons/bs";

export default function Features() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">

          {/* CARD 1 */}
          <div className="group bg-white px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 flex justify-center">
              <BsTruck className="text-[28px] text-gray-400 transition-colors duration-300 group-hover:text-primary" />
            </div>
            <h3 className="mb-2 text-sm font-semibold tracking-widest text-gray-800">
              WORLDWIDE DELIVERY
            </h3>
            <p className="text-sm text-gray-500">
              Far far away, behind the word mountains, far from the countries.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group bg-[#dedede] px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 flex justify-center">
              <BsShieldLock className="text-[28px] text-gray-400 transition-colors duration-300 group-hover:text-primary" />
            </div>
            <h3 className="mb-2 text-sm font-semibold tracking-widest text-gray-800">
              SECURE PAYMENTS
            </h3>
            <p className="text-sm text-gray-500">
              Far far away, behind the word mountains, far from the countries.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 flex justify-center">
              <BsArrowCounterclockwise className="text-[28px] text-gray-400 transition-colors duration-300 group-hover:text-primary" />
            </div>
            <h3 className="mb-2 text-sm font-semibold tracking-widest text-gray-800">
              SIMPLE RETURNS
            </h3>
            <p className="text-sm text-gray-500">
              Far far away, behind the word mountains, far from the countries.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
