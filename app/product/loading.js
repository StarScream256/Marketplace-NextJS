"use client"
import Header from "@/components/Header"

export default function Loading() {
  return (
  <div className="w-full">
    <Header />

    <div className="w-full mt-32 px-24 max-md:px-8 pb-8">
      <span className="flex justify-between mb-3 items-center">
        <span className="inline-block animate-pulse h-8 w-56 rounded-md bg-gray-500"></span>
        <span className="inline-block animate-pulse w-32 h-12 bg-gray-500 rounded-lg"></span>
      </span>
      <div className="w-full mt-4 grid grid-cols-4 max-md:grid-cols-2 gap-4">

        <div className="animate-pulse card w-full h-[300px] bg-gray-600 shadow-xl outline-2 outline-transparent hover:outline-white">
          <div className="card-body h-full flex-col justify-between">
            <div>
              <span className="inline-block animate-pulse w-10/12 h-8 bg-gray-500 rounded-md mb-3"></span>
              <span className="inline-block animate-pulse w-full h-4 bg-gray-500 rounded-md"></span>
              <span className="inline-block animate-pulse w-full h-4 bg-gray-500 rounded-md"></span>
              <span className="inline-block animate-pulse w-9/12 h-4 bg-gray-500 rounded-md"></span>
            </div>
            <div className="card-actions justify-end">
              <span className="inline-block animate-pulse w-28 h-12 bg-gray-500 rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="animate-pulse card w-full h-[300px] bg-gray-600 shadow-xl outline-2 outline-transparent hover:outline-white">
          <div className="card-body h-full flex-col justify-between">
            <div>
              <span className="inline-block animate-pulse w-10/12 h-8 bg-gray-500 rounded-md mb-3"></span>
              <span className="inline-block animate-pulse w-full h-4 bg-gray-500 rounded-md"></span>
              <span className="inline-block animate-pulse w-full h-4 bg-gray-500 rounded-md"></span>
              <span className="inline-block animate-pulse w-9/12 h-4 bg-gray-500 rounded-md"></span>
            </div>
            <div className="card-actions justify-end">
              <span className="inline-block animate-pulse w-28 h-12 bg-gray-500 rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="animate-pulse card w-full h-[300px] bg-gray-600 shadow-xl outline-2 outline-transparent hover:outline-white">
          <div className="card-body h-full flex-col justify-between">
            <div>
              <span className="inline-block animate-pulse w-10/12 h-8 bg-gray-500 rounded-md mb-3"></span>
              <span className="inline-block animate-pulse w-full h-4 bg-gray-500 rounded-md"></span>
              <span className="inline-block animate-pulse w-full h-4 bg-gray-500 rounded-md"></span>
              <span className="inline-block animate-pulse w-9/12 h-4 bg-gray-500 rounded-md"></span>
            </div>
            <div className="card-actions justify-end">
              <span className="inline-block animate-pulse w-28 h-12 bg-gray-500 rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="animate-pulse card w-full h-[300px] bg-gray-600 shadow-xl outline-2 outline-transparent hover:outline-white">
          <div className="card-body h-full flex-col justify-between">
            <div>
              <span className="inline-block animate-pulse w-10/12 h-8 bg-gray-500 rounded-md mb-3"></span>
              <span className="inline-block animate-pulse w-full h-4 bg-gray-500 rounded-md"></span>
              <span className="inline-block animate-pulse w-full h-4 bg-gray-500 rounded-md"></span>
              <span className="inline-block animate-pulse w-9/12 h-4 bg-gray-500 rounded-md"></span>
            </div>
            <div className="card-actions justify-end">
              <span className="inline-block animate-pulse w-28 h-12 bg-gray-500 rounded-lg"></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}