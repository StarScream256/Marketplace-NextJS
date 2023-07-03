"use client"
import { faCarSide } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function HeroSection() {
  return (
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-2xl flex flex-col items-center">
        <span className="text-5xl font-bold flex gap-2 justify-center">
          <p className="">Don't have </p>
          <p className="text-white">Cars?</p>
        </span>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary flex gap-3">
          <p>Get some cars</p>
          <FontAwesomeIcon icon={faCarSide} size="lg" />
        </button>
      </div>
    </div>
  </div>
  )
}