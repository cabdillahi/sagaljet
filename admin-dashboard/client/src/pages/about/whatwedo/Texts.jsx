import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function Texts() {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg ">
      <h3 className="text-red-500 font-semibold mb-2 text-sm sm:text-base">
        WHAT WE DO
      </h3>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
        Empowering East Africa's Digital Future
      </h1>
      <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
        Skillup is driving digital transformation across the Somali state and
        beyond, providing innovative solutions that fuel rapid and measurable
        business growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mb-6">
        <div className="flex-1">
          <h2 className="font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">
            How we help your business
          </h2>
          <ul className="space-y-2">
            {[
              'Tailored Software Solutions',
              'Secure Web Development',
              'Active involvement',
              'Mobile App Development',
              'Strategic Branding & Marketing',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center text-sm sm:text-base"
              >
                <CheckCircle
                  className="text-red-500 mr-2 flex-shrink-0"
                  size={20}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 relative mt-4 sm:mt-0">
          <img
            src="ABOUTUS.jpg"
            alt="Business people shaking hands"
            className="w-full h-auto rounded-lg object-cover sm:max-w-xs lg:max-w-sm mx-auto"
          />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white">
            <img
              src="about3.jpg"
              alt="Woman smiling"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Link to={'/service'} className="block w-full sm:w-auto">
        <Button className="bg-red-500 hover:bg-red-600 text-white w-full sm:w-auto">
          Read More
        </Button>
      </Link>
    </div>
  )
}