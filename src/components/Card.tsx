import React from 'react'
import Image from 'next/image'

// Images
import card from '../../public/images/card.png'

export default function Card() {
  return (
    <div className="w-full flex justify-center">
      <div>
        <Image src={card} alt="" className="rotate-12" />
      </div>
    </div>
  )
}
