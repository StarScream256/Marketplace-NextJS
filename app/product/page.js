"use client"
import { useState, useEffect } from 'react';
import ModalForm from '../../components/ModalForm';
import { supabase } from '../../lib/supabaseClient';
import Header from '@/components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const GetProduct = async () => {
  try {
    const { data, error } = await supabase.from('products').select();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};


export default function Product() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetProduct();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <Header />

      <div className="w-full mt-32 px-24 max-md:px-8 pb-8">
        <span className=" flex justify-between group">
          <h1 className="font-semibold text-2xl">Car of the Century</h1>
          <label htmlFor="modalForm" className="btn">
            add product
            <FontAwesomeIcon icon={faPlus} />
          </label>
        </span>
        <ModalForm />
        <div className="w-full mt-4 grid grid-cols-4 max-md:grid-cols-2 gap-4">

          {products.map((product) => (
          <div className="card w-full h-[300px] bg-base-100 shadow-xl image-full outline-2 outline-transparent hover:outline-white">
            <figure><img src={product.image} alt={product.title} /></figure>
            <div className="card-body h-full flex-col justify-between">
              <div>
                <p className="bg-transparent w-fit h-fit px-2 py-1 text-white mb-3 rounded-md border border-sky-400">{product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                <h1 className="font-semibold line-clamp-2 text-slate-50 text-xl">{product.title}</h1>
                <p className="line-clamp-2 text-slate-300 h-fit">{product.description}</p>
              </div>
              <div className="card-actions justify-end">
                <Link href={`/product/${product.id}`} className="btn btn-primary">Buy Now</Link>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}
