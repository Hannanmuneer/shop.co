import React, { useRef } from 'react';

const reviews = [
    {
        id: 1,
        name: "Sarah M.",
        rating: 5,
        comment: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        id: 2,
        name: "Alex K.",
        rating: 5,
        comment: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
        id: 3,
        name: "James L.",
        rating: 5,
        comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        id: 4,
        name: "Mooen K.",
        rating: 5,
        comment: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    }
];

const Testimonials = () => {
    const scrollRef = useRef(null);

 
    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 my-16">

            
            <div className="flex items-end justify-between mb-8">
                <h2 className="text-3xl md:text-5xl font-extrabold text-black uppercase tracking-tight">
                    Our Happy Customers
                </h2>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => handleScroll('left')}
                        className="p-2 text-xl font-bold text-black hover:opacity-60 transition cursor-pointer"
                        aria-label="Previous"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => handleScroll('right')}
                        className="p-2 text-xl font-bold text-black hover:opacity-60 transition cursor-pointer"
                        aria-label="Next"
                    >
                        →
                    </button>
                </div>
            </div>

          
            <div
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {reviews.map((rev) => (
                    <div
                        key={rev.id}
                        className="min-w-[340px] md:min-w-[400px] max-w-[400px] border border-black/10 rounded-[20px] p-6 md:p-7 flex flex-col gap-3 bg-white flex-shrink-0"
                    >
                      
                        <div className="flex text-[#FFC633] text-xl gap-1">
                            {[...Array(rev.rating)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>

                      
                        <div className="flex items-center gap-1.5 font-bold text-lg text-black">
                            <span>{rev.name}</span>
                          
                            <span className="w-5 h-5 bg-[#01AB31] text-white rounded-full flex items-center justify-center text-[10px] font-bold">
                                ✓
                            </span>
                        </div>

                    
                        <p className="text-black/60 text-sm md:text-base leading-relaxed">
                            "{rev.comment}"
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Testimonials;