import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function TopHero() {
  return (
    <div className="relative w-full h-48 sm:h-64 flex items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('ABOUTUS.jpg')",
        }}
      ></div>

      {/* Title */}
      <h1 className="absolute top-8 sm:top-[46px] left-1/2 transform -translate-x-1/2 text-white text-3xl sm:text-[50px] font-bold text-center font-sora z-20">
        About Us
      </h1>

      {/* Content */}
      <div className="absolute bottom-4 sm:bottom-auto sm:top-[126px] left-1/2 transform -translate-x-1/2 bg-white/10 rounded-[10px] px-4 sm:px-6 py-2 sm:py-4 flex items-center justify-center space-x-2 sm:space-x-3 z-20">
        {/* Home Icon and Link */}
        <AiOutlineHome className="text-white text-base sm:text-lg" />
        <Link
          href="/"
          className="text-white text-sm sm:text-base hover:text-gray-300 font-sora font-normal"
        >
          Home
        </Link>
        {/* Arrow Icon */}
        <MdKeyboardArrowRight className="text-gray-400 text-base sm:text-lg" />
        {/* Services */}
        <span className="text-red-500 text-sm sm:text-base font-sora font-normal">
          About
        </span>
      </div>
    </div>
  )
}
