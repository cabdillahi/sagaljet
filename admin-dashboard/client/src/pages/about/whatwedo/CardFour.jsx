import { Card, CardContent } from '@/components/ui/card'
import { House } from 'lucide-react'
import React from 'react'

const CardFour = () => {
  return (
    <Card className="w-[300px] overflow-hidden border-2 border-gray-300 rounded-3xl">
      <CardContent className="p-6 space-y-4">
        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
        <House />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Branding & Digital Marketing</h2>
          <p className="text-gray-500 text-sm">
          Unlock your brand’s potential with creative design and performance-driven marketing strategies.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardFour
