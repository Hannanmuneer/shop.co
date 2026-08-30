
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-[#FFC633]">
          ★
        </span>
      );
    }
    if (hasHalf) {
      stars.push(
        <span key="half" className="text-[#FFC633]">
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col gap-2 font-sans cursor-pointer group block"
    >

      <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden h-[290px] w-full flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <h3 className="font-bold text-base md:text-lg text-black mt-1 line-clamp-1 group-hover:underline">
        {product.name}
      </h3>

      <div className="flex items-center gap-2">
        <div className="flex text-lg leading-none">
          {renderStars(product.rating)}
        </div>
        <span className="text-xs md:text-sm text-black font-medium">
          {product.rating}/<span className="text-gray-500">5</span>
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xl md:text-2xl font-bold text-black">
          ${product.price}
        </span>

        {product.originalPrice && (
          <span className="text-xl md:text-2xl font-bold text-black/40 line-through">
            ${product.originalPrice}
          </span>
        )}

        {product.discount && (
          <span className="bg-[#FFEBEB] text-[#FF3333] text-xs font-medium px-2.5 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}
      </div>
    </Link>
  );
};

export default Card;