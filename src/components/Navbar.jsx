import React, { useState, useEffect, useRef } from 'react'
import { LuShoppingCart } from "react-icons/lu"
import { CgProfile } from "react-icons/cg"
import { IoSearchOutline, IoChevronDown, IoClose } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link, useNavigate } from 'react-router-dom'

const navLinks = [
    { name: 'Shop', to: '/shop', hasDropdown: true },
    { name: 'On Sale', to: '/onsale' },
    { name: 'New Arrivals', to: '/Newarrival' },
    { name: 'Brands', to: '/brands' },
]

const Navbar = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)

    
const [cartItems, setCartItems] = useState(
        () => JSON.parse(localStorage.getItem('cartproducts')) || []
    )

    useEffect(() => {
        const handleCartUpdate = () => {
            const storedCart = JSON.parse(localStorage.getItem('cartproducts')) || []
            setCartItems(storedCart)
        }

        
        window.addEventListener('cartUpdated', handleCartUpdate)
        window.addEventListener('storage', handleCartUpdate) 

        return () => {
            window.removeEventListener('cartUpdated', handleCartUpdate)
            window.removeEventListener('storage', handleCartUpdate)
        }
    }, [])

    
    const totalQuantity = cartItems.reduce((sum, item) => sum + Number(item.quantity || 1), 0)
 




    const [user, setUser] = useState(
        () => JSON.parse(localStorage.getItem('user')) || null
    )

    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setUser(null)
        setMenuOpen(false)
        navigate('/')
    }

    return (
        <header className="w-full bg-white border-b border-gray-100">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between gap-4 md:gap-8">

                    <div className="flex items-center gap-4">
                        <RxHamburgerMenu
                            size={26}
                            onClick={() => setIsOpen(true)}
                            className="block md:hidden cursor-pointer text-black hover:text-gray-600 transition-colors"
                        />
                        <Link to="/" className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-none">
                            SHOP.CO
                        </Link>
                    </div>

                    {/* Desktop links */}
                    <nav className="hidden md:flex items-center">
                        <ul className="flex items-center gap-6 text-gray-700 font-medium text-sm lg:text-base">
                            {navLinks.map((link) => (
                                <li key={link.name} className="py-2">
                                    <Link
                                        to={link.to}
                                        className="flex items-center gap-1 whitespace-nowrap hover:text-black transition-colors"
                                    >
                                        <span>{link.name}</span>
                                        {link.hasDropdown && <IoChevronDown className="text-xs" />}
                                    </Link>
                                </li>
                            ))}
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

            <Link to="/cart" className="relative inline-block">
            <LuShoppingCart size={24} className="cursor-pointer hover:text-gray-600" />
            {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {totalQuantity}
                </span>
            )}
        </Link>

                       
                        {user ? (
                            <div className="relative" ref={menuRef}>
                                <button
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    className="flex items-center gap-2 hover:text-gray-600 transition-colors"
                                >
                                    <CgProfile size={24} />
                                    <span className="hidden sm:block text-sm font-medium max-w-[100px] truncate">
                                        {user.name}
                                    </span>
                                </button>

                                {menuOpen && (
                                    <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-lg p-4 z-50">
                                        <p className="font-bold text-sm truncate">{user.name}</p>
                                        {user.email && (
                                            <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                        )}
                                        <button
                                            onClick={handleLogout}
                                            className="mt-4 w-full py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors"
                                        >
                                            Log out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/signup" aria-label="Sign up">
                                <CgProfile size={24} className="cursor-pointer hover:text-gray-600" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>

         
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            />

           
            <aside
                className={`fixed top-0 left-0 h-full w-72 max-w-[80%] bg-white z-50 shadow-xl md:hidden transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <span className="text-2xl font-extrabold tracking-tight">SHOP.CO</span>
                    <IoClose
                        size={28}
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer hover:text-gray-600"
                    />
                </div>

                <ul className="flex flex-col p-5 gap-1 text-gray-700 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between py-3 border-b border-gray-100 hover:text-black transition-colors"
                            >
                                <span>{link.name}</span>
                                {link.hasDropdown && <IoChevronDown className="text-sm" />}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </header>
    )
}

export default Navbar
