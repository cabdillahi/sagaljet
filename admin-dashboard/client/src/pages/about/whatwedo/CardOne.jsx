import { DollarSign } from 'lucide-react'

export default function CardOne() {
  return (
    <div className="max-w-[300px] mx-auto ">
      <div className="bg-white rounded-xl  shadow_card  p-6">
        <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
          <img src="/Vector1.png" alt="" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Web Development</h2>
        <p className="text-gray-500 mb-1">Empowering your business</p>
        <p className="text-gray-400 text-sm">
          with modern and responsive websites designed to convert visitors into loyal customers.
        </p>
      </div>
    </div>
  )
}