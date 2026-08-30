import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newProducts } from './newProducts';
import { products } from './Products';

const ProductDetail = () => {
  const { id } = useParams();

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cartproducts')) || []
  );

  const [selectedSize, setSelectedSize] = useState('Large');
  const [quantity, setQuantity] = useState(1);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const product =
    newProducts.find((item) => String(item.id) === String(id)) ||
    products.find((item) => String(item.id) === String(id));

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!product) return;

    setCart((prevCart) => {
   
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedSize === selectedSize
      );

      let updatedCart;

      if (existingIndex > -1) {
      
        updatedCart = [...prevCart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + quantity,
        };
      } else {
      
        const newItem = {
          ...product,
          selectedSize,
          quantity,
        };
        updatedCart = [...prevCart, newItem];
      }

      localStorage.setItem('cartproducts', JSON.stringify(updatedCart));
      return updatedCart;
    });


  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center font-sans">
        <h2 className="text-3xl font-extrabold text-black">Product Not Found!</h2>
        <Link to="/" className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
          Back to Home
        </Link>
      </div>
    );
  }

  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
      <Link to="/" className="inline-block mb-6 text-sm font-medium text-black bg-[#F0EEED] px-5 py-2.5 rounded-full hover:bg-gray-300 transition">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
   
        <div className="bg-[#F0EEED] rounded-[20px] p-8 flex items-center justify-center h-[400px]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain mix-blend-multiply"
          />
        </div>

       
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black uppercase">
            {product.name}
          </h1>

          <div className="flex items-center gap-2">
            <span className="text-[#FFC633] text-xl">★</span>
            <span className="text-sm font-medium text-black">
              {product.rating}/<span className="text-gray-500">5</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-bold text-black">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-2xl font-bold text-black/40 line-through">
                ${product.originalPrice}
              </span>
            )}
            {product.discount && (
              <span className="bg-[#FFEBEB] text-[#FF3333] text-xs font-medium px-3 py-1 rounded-full">
                -{product.discount}%
              </span>
            )}
          </div>

          <p className="text-black/60 text-sm md:text-base leading-relaxed border-b border-black/10 pb-4">
            This high-quality product is designed with premium materials for maximum comfort and longevity.
          </p>


          <div className="flex flex-col gap-3 border-b border-black/10 pb-5">
            <span className="text-sm font-medium text-black/60">Choose Size</span>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-[#F0EEED] text-black/60 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

       
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center justify-between bg-[#F0EEED] px-5 py-3.5 rounded-full w-36">
              <button
                onClick={handleDecrease}
                className="text-2xl font-bold text-black hover:opacity-70 transition active:scale-95"
              >
                -
              </button>
              <span className="font-bold text-base text-black">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="text-2xl font-bold text-black hover:opacity-70 transition active:scale-95"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition active:scale-95 text-center"
            >
            Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;