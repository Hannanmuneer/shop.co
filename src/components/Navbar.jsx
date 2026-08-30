import React from 'react'
import { LuShoppingCart } from "react-icons/lu"
import { CgProfile } from "react-icons/cg"
import { IoSearchOutline, IoChevronDown } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="w-full bg-white border-b border-gray-100">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between gap-4 md:gap-8">

                    <div className="flex items-center gap-4">
                        <RxHamburgerMenu
                            size={26}
                            className="block md:hidden cursor-pointer text-black hover:text-gray-600 transition-colors"
                        />
                        <a href="#" className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-none">
                            SHOP.CO
                        </a>
                    </div>

                    <nav className="hidden md:flex items-center">
                        <ul className="flex items-center gap-6 text-gray-700 font-medium text-sm lg:text-base">
                            <li className="relative group cursor-pointer py-2">
                                <div className="flex items-center gap-1 hover:text-black transition-colors">
                                    <span>Shop</span>
                                    <IoChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
                                </div>

                            </li>
                            <li className="hover:text-black cursor-pointer transition-colors">On Sale</li>
                            <Link to={'/Newarrival'}>
                            <li className="hover:text-black cursor-pointer transition-colors whitespace-nowrap">New Arrivals</li>
                            </Link>
                            <li className="hover:text-black cursor-pointer transition-colors">Brands</li>
                        </ul>
                    </nav>

                    <div className="hidden md:flex relative items-center flex-1 max-w-md">
                        <IoSearchOutline className="absolute left-3.5 text-gray-400 text-lg pointer-events-none" />
                        <input
                            type="search"
                            placeholder="Search for products..."
                            className="w-full pl-10 pr-4 py-2 bg-gray-100 focus:bg-white text-sm rounded-full border border-transparent focus:border-black outline-none transition-all"
                        />
                    </div>


                    <div className="flex items-center gap-3 sm:gap-4 text-black">
                        <IoSearchOutline size={24} className="block md:hidden cursor-pointer hover:text-gray-600" />
                        <Link to="/cart">
                        <LuShoppingCart size={24} className="cursor-pointer hover:text-gray-600" />
        </Link>
                        <CgProfile size={24} className="cursor-pointer hover:text-gray-600" />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar