import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DISCOUNT_RATE = 0.2
const DELIVERY_FEE = 15
// const API_URL = 'http://localhost:5000/api'
const API_URL = import.meta.env.VITE_BACKEND_URL;


const readItem = (item) => ({
    id: item.id || item._id || item.productId || '',
    name: item.name || item.title || 'Product',
    image: item.image || item.img || item.thumbnail || '',
    size: item.size || '',
    color: item.color || '',
    price: Number(String(item.price).replace(/[^0-9.]/g, '')) || 0,
    quantity: Number(item.quantity || item.qty || 1),
})

const Checkout = () => {
    const navigate = useNavigate()
    const savedUser = JSON.parse(localStorage.getItem('user')) || {}

    const [cart] = useState(() =>
        (JSON.parse(localStorage.getItem('cartproducts')) || []).map(readItem)
    )
    const [form, setForm] = useState({
        name: savedUser.name || '',
        email: savedUser.email || '',
        phone: '',
        street: '',
        city: '',
        state: '',
        postal: '',
        notes: '',
        payment: 'cod',
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)
    const discount = subtotal * DISCOUNT_RATE
    const total = subtotal - discount + (cart.length ? DELIVERY_FEE : 0)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const { payment, ...customer } = form

        try {
            const res = await fetch(`${API_URL}/api/orders`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ customer, items: cart, paymentMethod: payment }),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.message || 'Order place nahi ho saka.')

            if (payment === 'online') {

                window.location.href = data.paymentUrl
            } else {
                
                localStorage.removeItem('cartproducts')
                navigate(`/order-success?orderId=${data.orderId}`)
            }
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    }

    const inputClass =
        'w-full px-4 py-3 bg-[#F0EEED] focus:bg-white text-sm rounded-full border border-transparent focus:border-black outline-none transition-all'

   
    if (cart.length === 0) {
        return (
            <div className="max-w-xl mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl sm:text-4xl font-extrabold uppercase">Your cart is empty</h1>
                <p className="text-gray-600 mt-4">Checkout se pehle cart mein kuch products add karein.</p>
                <Link
                    to="/Newarrival"
                    className="inline-block mt-8 px-10 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                    Browse new arrivals
                </Link>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <p className="text-sm text-gray-500">
                <Link to="/" className="hover:text-black">Home</Link> /{' '}
                <Link to="/cart" className="hover:text-black">Cart</Link> /{' '}
                <span className="font-bold text-black">Checkout</span>
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase mt-5 mb-6">Checkout</h1>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">

        
                <div className="border border-gray-200 rounded-3xl p-5 sm:p-6 flex flex-col gap-4">
                    <h2 className="text-xl sm:text-2xl font-bold">Delivery details</h2>

                    <input name="name" type="text" placeholder="Full name" value={form.name}
                        onChange={handleChange} required className={inputClass} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input name="email" type="email" placeholder="Email address" value={form.email}
                            onChange={handleChange} required className={inputClass} />
                       <input name="phone" type="tel" placeholder="Phone number" value={form.phone}
    onChange={handleChange} required pattern="[0-9+\s\-]{7,15}"
    title="Sahi phone number likhein" className={inputClass} />
                    </div>

                    <input name="street" type="text" placeholder="Street address (house, street, area)"
                        value={form.street} onChange={handleChange} required className={inputClass} />

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input name="city" type="text" placeholder="City" value={form.city}
                            onChange={handleChange} required className={inputClass} />
                        <input name="state" type="text" placeholder="State / Province" value={form.state}
                            onChange={handleChange} required className={inputClass} />
                        <input name="postal" type="text" placeholder="Postal code" value={form.postal}
                            onChange={handleChange} required className={inputClass} />
                    </div>

                    <textarea name="notes" rows={3} placeholder="Order notes (optional)" value={form.notes}
                        onChange={handleChange}
                        className="w-full px-5 py-3 bg-[#F0EEED] focus:bg-white text-sm rounded-3xl border border-transparent focus:border-black outline-none transition-all resize-none" />

                    <h2 className="text-xl sm:text-2xl font-bold mt-2">Payment method</h2>
                    <div className="flex flex-col gap-3">
                        {[
                            { value: 'cod', label: 'Cash on delivery', hint: 'Order milne par payment karein' },
                            { value: 'online', label: 'Pay online', hint: 'Card ya bank transfer (payment gateway se)' },
                        ].map((opt) => (
                            <label
                                key={opt.value}
                                className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-colors ${
                                    form.payment === opt.value ? 'border-black' : 'border-gray-200 hover:border-gray-400'
                                }`}
                            >
                                <input type="radio" name="payment" value={opt.value}
                                    checked={form.payment === opt.value} onChange={handleChange}
                                    className="mt-1 accent-black" />
                                <span>
                                    <span className="block font-medium text-sm">{opt.label}</span>
                                    <span className="block text-xs text-gray-500">{opt.hint}</span>
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

              
                <div className="border border-gray-200 rounded-3xl p-5 sm:p-6 flex flex-col gap-4 lg:sticky lg:top-6">
                    <h2 className="text-xl sm:text-2xl font-bold">Order Summary</h2>

                    <ul className="flex flex-col gap-4 max-h-72 overflow-y-auto pr-1">
                        {cart.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-xl bg-[#F0EEED] overflow-hidden shrink-0">
                                    {item.image && (
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-sm truncate">{item.name}</p>
                                    <p className="text-xs text-gray-500">
                                        {[item.size && `Size: ${item.size}`, item.color && `Color: ${item.color}`]
                                            .filter(Boolean).join(' | ')}
                                    </p>
                                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                </div>
                                <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="border-t border-gray-200 pt-4 flex flex-col gap-3 text-sm sm:text-base">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Subtotal</span>
                            <span className="font-bold">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Discount (-{DISCOUNT_RATE * 100}%)</span>
                            <span className="font-bold text-red-500">-${discount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Delivery Fee</span>
                            <span className="font-bold">${DELIVERY_FEE.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                        <span className="text-lg font-medium">Total</span>
                        <span className="text-xl font-bold">${total.toFixed(2)}</span>
                    </div>

                    {error && <p className="text-sm text-red-500 text-center">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-60"
                    >
                        {loading
                            ? (form.payment === 'online' ? 'Redirecting to payment...' : 'Placing order...')
                            : (form.payment === 'online' ? 'Pay now' : 'Place order')}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Checkout
