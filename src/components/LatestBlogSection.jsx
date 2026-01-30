import blog1 from "../assets/images/latest-1.jpg";
import blog2 from "../assets/images/latest-2.jpg";
import blog3 from "../assets/images/latest-3.jpg";

const LatestBlogSection = () => {
  const blogs = [
    {
      id: 1,
      img: blog1,
      date: "May 4, 2019",
      comments: 5,
      title: "The Best Street Style From London Fashion Week",
      desc: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
      link: "#",
    },
    {
      id: 2,
      img: blog2,
      date: "May 4, 2019",
      comments: 5,
      title: "Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes",
      desc: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
      link: "#",
    },
    {
      id: 3,
      img: blog3,
      date: "May 4, 2019",
      comments: 5,
      title: "How To Brighten Your Wardrobe With A Dash Of Lime",
      desc: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-24">

        {/* SECTION TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">From The Blog</h2>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              <div className="p-6">
                {/* META */}
                <div className="flex gap-4 text-sm text-gray-500 mb-3">
                  <span>📅 {blog.date}</span>
                  <span>💬 {blog.comments}</span>
                </div>

                <a href={blog.link}>
                  <h4 className="text-lg font-semibold mb-3 hover:text-pink-600 transition">
                    {blog.title}
                  </h4>
                </a>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestBlogSection;
