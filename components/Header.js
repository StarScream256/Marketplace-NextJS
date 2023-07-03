"use client"

import '../app/globals.css';
import React from 'react'
import Link from 'next/link';


export default function Header() {

  return (
    <header className="fixed z-50 top-0 w-full h-fit flex justify-between items-center px-12 pt-2">
      <div className="text-3xl font-semibold w-fit h-fit text-white">
        MarCars
      </div>
      <nav className="flex gap-5 py-5 items-center text-slate-200">
        <Link href="/" className='hover:text-white py-2 px-3 rounded-md bg-transparent hover:bg-slate-500/75'>Home</Link>
        <Link href="/product" className='hover:text-white py-2 px-3 rounded-md bg-transparent hover:bg-slate-500/75'>Product</Link>
        <Link href="/login" className='hover:text-white py-2 px-3 rounded-md bg-transparent hover:bg-slate-500/75'>Login</Link>
      </nav>
    </header>
  );
}