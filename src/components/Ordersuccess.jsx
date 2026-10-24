import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

// const API_URL = 'http://localhost:5000/api'
const API_URL = import.meta.env.VITE_BACKEND_URL;

const OrderSuccess = () => {
    const [params] = useSearchParams()
    const orderId = params.get('orderId')
    const [order, setOrder] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!orderId) {
            setError('Order ID nahi mili.')
            setLoading(false)
            return
        }

        fetch(`${API_URL}/api/verify-payment/${orderId}`)
            .then((r) => (r.ok ? r.json() : Promise.reject()))
            .then((data) => {
                // Backend se { success: true, order: { ... } } aata hai
                const orderData = data.order || data
                setOrder(orderData)
                
                // Cart clear karne ki condition
                if (orderData.paymentStatus === 'Paid' || orderData.paymentMethod === 'cod') {
                    localStorage.removeItem('cartproducts')
                }
                setLoading(false)
            })
            .catch(() => {
                setError('Order ki details nahi mil saki.')
                setLoading(false)
            })
    }, [orderId])

    let title = 'Checking your order...'
    let message = ''

    if (error) {
        title = 'Something went wrong'
        message = error
    } else if (loading) {
        title = 'Checking your order...'
        message = 'Kripya intezaar karein, order verify ho raha hai.'
    } else if (order?.paymentStatus === 'Paid') {
        title = 'Payment received'
        message = 'Aap ki payment confirm ho gayi hai aur order place ho gaya hai.'
    } else if (order?.paymentMethod === 'cod') {
        title = 'Order placed'
        message = 'Aap ka order place ho gaya hai. Delivery par payment karein.'
    } else {
        title = 'Order successful'
        message = 'Aap ka order successfully place ho gaya hai.'
        localStorage.removeItem('cartproducts')
    }

    return (
        <div className="max-w-xl mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase">{title}</h1>
            {message && <p className="text-gray-600 mt-4">{message}</p>}
            {orderId && (
                <p className="text-sm text-gray-500 mt-2">
                    Order ID: <span className="font-bold text-black">{orderId}</span>
                </p>
            )}
            <Link
                to={error ? '/checkout' : '/'}
                className="inline-block mt-8 px-10 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
                {error ? 'Try again' : 'Continue shopping'}
            </Link>
        </div>
    )
}

export default OrderSuccess