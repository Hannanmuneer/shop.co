import Card from './Card'
import { useState,useEffect } from 'react'


const API_URL = import.meta.env.VITE_BACKEND_URL;

const Newarrival = () => {
  const [productss, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalprod, settotaprod] = useState(4);

   useEffect(() => {
      const getProducts = async () => {
        try {
          setLoading(true);
          setError(null);
  
          const res = await fetch(`${API_URL}/data/newproducts`);
          if (!res.ok) throw new Error(`Request failed (${res.status})`);
  
          const data = await res.json();
          setProducts(data.products || []);
        } catch (err) {
          setError(err.message || "Kuch galat ho gaya");
        } finally {
          setLoading(false);
        }
      };
  
      getProducts();
    }, []);

  const handleShowMore = () => {
    settotaprod((prev) => prev + 4);
  };

  const handleShowLess = () => {
    settotaprod(4);
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>;

  if (productss.length === 0) return <p className="text-center py-10">Koi product nahi mila</p>;

  return (
    <div className='w-full py-6 md:py-10 border-b-[#F0EEED] border'>
      <div className='font-extrabold md:text-5xl text-4xl text-black text-center uppercase '>
        New Arrivla
      </div>
      <div className='w-full max-w-7xl mt-8 mx-auto px-4 sm:px-6'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productss.slice(0, totalprod).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 py-8">

        <div className="flex justify-center items-center mt-10 mb-6">
          {totalprod < productss.length ? (
            <button
              onClick={handleShowMore}
              className="w-full sm:w-auto min-w-[218px] px-14 py-4 rounded-full border border-black/10 bg-white text-black font-medium text-base hover:bg-black hover:text-white transition-all duration-300 shadow-sm cursor-pointer active:scale-95 text-center"
            >
              View All
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="w-full sm:w-auto min-w-[218px] px-14 py-4 rounded-full border border-black/10 bg-black text-white font-medium text-base hover:bg-gray-800 transition-all duration-300 shadow-sm cursor-pointer active:scale-95 text-center"
            >
              Show Less
            </button>
          )}
        </div>

      </div>
    </div>
  )
}

export default Newarrival
