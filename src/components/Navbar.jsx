const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold tracking-wide">
          Fashionista
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="hover:text-pink-500 cursor-pointer">Men</li>
          <li className="hover:text-pink-500 cursor-pointer">Women</li>
          <li className="hover:text-pink-500 cursor-pointer">Kids</li>
          <li className="hover:text-pink-500 cursor-pointer">New</li>
        </ul>

        <button className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-pink-500 transition">
          Cart
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
