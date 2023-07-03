'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Header from '@/components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function DetailBlog ({ params }) {
  const [products, setProducts] = useState([]);
  const [specs, setSpecs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select()
          .eq('id', params.slug);

        const { data: specData, error: specError } = await supabase
          .from('spec')
          .select()
          .eq('product_id', params.slug);

        if (productsError || specError) {
          return;
        }

        setProducts(productsData);
        setSpecs(specData)
      } catch (error) {
        console.log("fetch data error", error)
      }
    }
    fetchData();
  }, [params.slug])
  return (
    <>
      <Header />
      <div className="px-16 pt-3 mt-24">
        <span className='inline-block w-full h-fit'>
          <Link href={'/product'} className='btn btn-ghost'>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back
          </Link>
        </span>
        {products.map((product) => (
          <div 
            key={product.id}
            className="grid grid-cols-6 gap-8 mt-4"
          >
            <div className="col-span-2 px-2 flex flex-col items-start gap-3">
              <img 
                src={product.image} 
                alt="Product Image" 
                className="w-full object-cover h-56 rounded-lg" 
              />
              <span className="">
                <p className="">Market Price</p>
                <p className="font-semibold text-white">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
              </span>
              <span className="">
                <p className="">Available on</p>
                <p className="font-semibold text-white">{product.created_at}</p>
              </span>
              <span className="">
                <p className="">Category</p>
                <p className="font-semibold text-white">{product.category}</p>
              </span>
            </div>
            <div className="col-span-4 flex flex-col items-start gap-4">
              <h1 className="text-3xl font-semibold text-white">{product.title}</h1>
              <p className="w-4/5">{product.description}</p>
              {specs.map((spec) => (
              <>
                <h2 className="text-2xl mt-4 mb-2 font-semibold text-white">Detailed Specs About {product.title}</h2>
                <div 
                  key={spec.id} 
                  className="w-full grid grid-cols-3">
                  <div className="w-full flex flex-col items-start gap-2">
                    <span className="">
                      <p className="">Type</p>
                      <p className="font-semibold text-white">{spec.type}</p>
                    </span>
                    <span className="">
                      <p className="">Release on</p>
                      <p className="font-semibold text-white">{spec.year}</p>
                    </span>
                    <span className="">
                      <p className="">Engine</p>
                      <p className="font-semibold text-white">{spec.engine}</p>
                    </span>
                  </div>
                  <div className="w-full flex flex-col items-start gap-2">
                    <span className="">
                      <p className="">Fuel Tank</p>
                      <p className="font-semibold text-white">{spec.fuel} Litre</p>
                    </span>
                    <span className="">
                      <p className="">Seat</p>
                      <p className="font-semibold text-white">{spec.seat} Seater</p>
                    </span>
                  </div>
                  <div className="w-full flex flex-col items-start gap-2">
                    <span className="">
                      <p className="">Acceleration (1-100 km/h)</p>
                      <p className="font-semibold text-white">{spec.acceleration} Seconds</p>
                    </span>
                    <span className="">
                      <p className="">Spped</p>
                      <p className="font-semibold text-white">{spec.speed} km/h</p>
                    </span>
                  </div>
                </div>
              </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}