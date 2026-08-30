import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiTag, FiArrowRight } from 'react-icons/fi';
import Topsell from './Topsell';

const Cart = () => {

    const [cartItems, setCartItems] = useState(
        () => JSON.parse(localStorage.getItem('cartproducts')) || []
    );
    const [promoCode, setPromoCode] = useState('');
    const [discountPercent, setDiscountPercent] = useState(20);


    const updateLocalStorage = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem('cartproducts', JSON.stringify(updatedCart));
    };

    const handleIncrease = (index) => {
        const updated = [...cartItems];
        updated[index].quantity += 1;
        updateLocalStorage(updated);
    };

    const handleDecrease = (index) => {
        const updated = [...cartItems];
        if (updated[index].quantity > 1) {
            updated[index].quantity -= 1;
            updateLocalStorage(updated);
        }
    };

    const handleRemoveItem = (index) => {
        const updated = cartItems.filter((_, i) => i !== index);
        updateLocalStorage(updated);
    };

    const subtotal = cartItems.reduce(
        (acc, item) => acc + Number(item.price) * item.quantity,
        0
    );
    const discountAmount = Math.round((subtotal * discountPercent) / 100);
    const deliveryFee = subtotal > 0 ? 15 : 0;
    const total = subtotal - discountAmount + deliveryFee;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 font-sans">
            <div className="text-sm text-black/60 mb-6">
                <Link to="/" className="hover:text-black">
                    Home
                </Link>{' '}
                / <span className="text-black font-medium">Cart</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-black uppercase mb-6 md:mb-8 tracking-tight">
                Your Cart
            </h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-16 border rounded-[20px] bg-[#F0EEED]/30">
                    <h2 className="text-2xl font-bold text-black mb-4">Your cart is empty!</h2>
                    <Link
                        to="/"
                        className="inline-block bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition"
                    >
                        Explore Products
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">


                    <div className="lg:col-span-7 border border-black/10 rounded-[20px] p-4 sm:p-6 bg-white flex flex-col gap-4 sm:gap-6">
                        {cartItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="flex items-center gap-4 sm:gap-6">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[#F0EEED] rounded-[16px] flex items-center justify-center p-2 flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-contain mix-blend-multiply"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between self-stretch py-1">
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-base sm:text-lg text-black line-clamp-1">
                                                {item.name}
                                            </h3>
                                            <button
                                                onClick={() => handleRemoveItem(index)}
                                                className="text-red-500 hover:text-red-700 transition text-lg sm:text-xl p-1"
                                            >
                                                <RiDeleteBin6Line />
                                            </button>
                                        </div>

                                        <p className="text-xs sm:text-sm text-black">
                                            <span className="text-black/60">Size: </span>
                                            {item.selectedSize || 'Large'}
                                        </p>
                                        <p className="text-xs sm:text-sm text-black">
                                            <span className="text-black/60">Color: </span>
                                            {item.color || 'Default'}
                                        </p>

                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-xl sm:text-2xl font-bold text-black">
                                                ${item.price}
                                            </span>

                                            <div className="flex items-center justify-between bg-[#F0EEED] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full w-28 sm:w-32">
                                                <button
                                                    onClick={() => handleDecrease(index)}
                                                    className="text-lg font-bold text-black hover:opacity-70 transition"
                                                >
                                                    -
                                                </button>
                                                <span className="font-bold text-sm sm:text-base text-black">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => handleIncrease(index)}
                                                    className="text-lg font-bold text-black hover:opacity-70 transition"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {index !== cartItems.length - 1 && (
                                    <hr className="border-black/10" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>


                    <div className="lg:col-span-5 border border-black/10 rounded-[20px] p-5 sm:p-6 bg-white flex flex-col gap-5">
                        <h2 className="text-xl sm:text-2xl font-bold text-black">
                            Order Summary
                        </h2>

                        <div className="flex flex-col gap-4 text-sm sm:text-base">
                            <div className="flex justify-between items-center">
                                <span className="text-black/60">Subtotal</span>
                                <span className="font-bold text-black">${subtotal}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-black/60">Discount (-{discountPercent}%)</span>
                                <span className="font-bold text-[#FF3333]">-${discountAmount}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-black/60">Delivery Fee</span>
                                <span className="font-bold text-black">${deliveryFee}</span>
                            </div>

                            <hr className="border-black/10 my-1" />

                            <div className="flex justify-between items-center text-lg sm:text-xl font-bold">
                                <span className="text-black">Total</span>
                                <span className="text-black">${total}</span>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-2">
                            <div className="relative flex-1">
                                <FiTag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/40 text-lg" />
                                <input
                                    type="text"
                                    placeholder="Add promo code"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    className="w-full bg-[#F0EEED] pl-11 pr-4 py-3 rounded-full text-sm text-black placeholder-black/40 focus:outline-none"
                                />
                            </div>
                            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition active:scale-95">
                                Apply
                            </button>
                        </div>

                        <button className="w-full bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition active:scale-95 flex items-center justify-center gap-2 mt-2 text-base">
                            Go to Checkout <FiArrowRight className="text-lg" />
                        </button>
                    </div>

                </div>
            )}
            <Topsell />
        </div>
    );
};

export default Cart;