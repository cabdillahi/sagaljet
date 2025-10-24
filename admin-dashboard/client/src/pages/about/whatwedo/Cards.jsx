import React from 'react'
import CardOne from './CardOne'
import CardTwo from './CardTwo'
import CardThree from './CardThree'
import CardFour from './CardFour'

export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
      <CardOne />
      <CardTwo />
      <CardThree />
      <CardFour />
    </div>
  )
}
