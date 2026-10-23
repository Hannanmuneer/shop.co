import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'

const API_URL = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            // TODO: yahan apni backend API call karein, jaise:
            const res = await axios.post(`${API_URL}/login`, form)
            localStorage.setItem('token', res.data.token)
            console.log('Login data:', form)
            const user = { name: form.email.split('@')[0], email: form.email }
localStorage.setItem('user', JSON.stringify(user))
navigate('/')
    
        } catch (err) {
            setError(err.response?.data?.message || 'Email ya password galat hai.')
        } finally {
            setLoading(false)
        }
    }

    const inputClass =
        'w-full px-4 py-3 bg-gray-100 focus:bg-white text-sm rounded-full border border-transparent focus:border-black outline-none transition-all'

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
            <div className="w-full max-w-md">
                <Link to="/" className="block text-center text-3xl font-extrabold tracking-tight text-black mb-8">
                    SHOP.CO
                </Link>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-black text-center">Welcome back</h1>
                <p className="text-sm text-gray-500 text-center mt-2 mb-8">
                    Log in to see your cart and orders.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className={`${inputClass} pr-12`}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
                        >
                            {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
                        </button>
                    </div>

                    {error && <p className="text-sm text-red-500 text-center">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-60"
                    >
                        {loading ? 'Logging in...' : 'Log in'}
                    </button>
                </form>

                <p className="text-sm text-gray-600 text-center mt-6">
                    Account nahi hai?{' '}
                    <Link to="/signup" className="font-bold text-black underline hover:text-gray-600">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
