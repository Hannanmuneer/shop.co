import React from 'react';

const categories = [
  {
    id: 1,
    title: "Casual",
    className: "md:col-span-4",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Formal",
    className: "md:col-span-8",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Party",
    className: "md:col-span-8",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Gym",
    className: "md:col-span-4",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=80",
  },
];

const Gridlayout = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 my-12">
     
      <div className="bg-[#F0EEED] rounded-[40px] px-6 py-10 md:px-16 md:py-16">
        
      
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-black uppercase mb-8 md:mb-14 tracking-tight">
          Browse By Dress Style
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`relative h-[190px] md:h-[280px] rounded-[20px] overflow-hidden bg-white group cursor-pointer ${cat.className}`}
            >
           
              <span className="absolute top-4 left-6 md:top-6 md:left-9 z-10 text-2xl md:text-4xl font-bold text-black">
                {cat.title}
              </span>

             
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover object-top md:object-right-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gridlayout;