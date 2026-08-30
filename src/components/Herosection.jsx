import React from 'react'


const Herosection = () => {
    return (
        <div className="w-full bg-[#F2F0F1]">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">


                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <h1 className="py-4 text-5xl sm:text-5xl lg:text-[64px] font-extrabold text-black leading-[1.05] tracking-tight">
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </h1>

                        <p className="py-4 text-gray-600 text-md sm:text-base max-w-xl">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>

                        <button className="w-full sm:w-fit bg-black text-white font-medium py-3.5 px-14 rounded-full hover:bg-gray-800 transition-colors cursor-pointer">
                            Shop Now
                        </button>

                        <div className="flex flex-wrap lg:flex-nowrap justify-center sm:justify-start items-center gap-y-6 gap-x-8 sm:gap-8 mt-8">
                            <div className="pr-6 border-r border-gray-300 text-center sm:text-left">
                                <span className="block text-3xl sm:text-4xl font-bold text-black">200+</span>
                                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">International Brands</p>
                            </div>

                            <div className="sm:pr-6 sm:border-r sm:border-gray-300 text-center sm:text-left">
                                <span className="block text-3xl sm:text-4xl font-bold text-black">2,000+</span>
                                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">High-Quality Products</p>
                            </div>

                            <div className="w-full sm:w-auto text-center sm:text-left">
                                <span className="block text-3xl sm:text-4xl font-bold text-black">30,000+</span>
                                <p className="text-xs sm:text-sm text-gray-600 mt-0.5">Happy Customers</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full lg:w-1/2 self-stretch relative flex items-center justify-center">
                        <div className="relative w-full max-w-130 aspect-4/5 mx-auto">

                            <img
                                src="/crop.jpg"
                                alt="Hero Image"
                                className="absolute inset-0 w-full h-full object-contain object-bottom z-10"
                            />

                            <svg
                                className="absolute top-6 right-6 w-16 h-16 text-black z-20 pointer-events-none"
                                viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" fill="currentColor" />
                            </svg>

                            <svg
                                className="absolute top-1/2 -translate-y-1/2 left-2 w-10 h-10 text-black z-20 pointer-events-none"
                                viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" fill="currentColor" />
                            </svg>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Herosection
