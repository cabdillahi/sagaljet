import { Separator } from '@/components/ui/separator'
import logo1 from '../../../public/logo1.png'
import logo2 from '../../../public/logo2.png'
import logo3 from '../../../public/logo3.png'
import logo4 from '../../../public/logo4.png'
import logo5 from '../../../public/logo5.png'
import logo6 from '../../../public/logo6.png'
import { useDispatch, useSelector } from 'react-redux'
import { getClientFn } from '@/redux/slices/clients/GetClient'
import { useEffect } from 'react'

export default function Clients() {
  const client = useSelector((state) => state.getClient)
  const disptach = useDispatch()

  // const logos = client.data

  useEffect(() => {
    disptach(getClientFn())
  }, [])

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-12 md:py-24 lg:py-32 bg-white">
      <div className=" mx-auto max-w-7xl lg:py-6 px-4 sm:px-6 lg:px-8  rounded-2xl shadow-custom">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tighter">
            Trusted by Leading <br className="hidden sm:inline" /> Brands in
            East Africa
          </h2>
          <p className="max-w-[600px] text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400">
            We partner with innovative businesses to deliver{' '}
            <br className="hidden sm:inline" /> custom technology solutions
            across industries.
          </p>
          <div className="flex items-center justify-start lg:justify-end">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                65<span className="text-[#F91C2E]">+</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold dark:text-gray-400">
                Trusted Company
              </p>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {client && Array.isArray(client.data) ? (
            client.data.slice(0, 6).map((logo, index) => (
              <div key={index} className="w-full max-w-[120px]">
                <img
                  src={logo.logoUrl}
                  alt={logo.name}
                  width={120}
                  height={60}
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            ))
          ) : (
            <p>No logos available</p>
          )}
        </div>
      </div>
    </section>
  )
}
