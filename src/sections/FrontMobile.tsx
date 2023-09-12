import React from 'react'
import Image from 'next/image'

// Components
import { StarTitle } from '@/components'

// Images
import design from '../../public/images/design.jpg'
import code from '../../public/images/code.jpg'

// icons
import { BiSolidRightArrow } from 'react-icons/bi'

export default function FrontMobile() {
  return (
    <div className="bg-dark-700">
      <StarTitle
        title="Frontend Development: <br /> Design Ready to Get Coded"
        subtitle="In todays rapidly evolving digital landscape, having a strong online presence is crucial for businesses to thrive. Our frontend and mobile application offers a gateway to enhancing user engagement and expanding your reach."
      />
      <div className="relative flex items-center justify-center gap-16 my-32 text-xxl">
        <Image src={design} alt="" className="w-1/3 rounded-2xl z-10" />
        <BiSolidRightArrow className="text-white text-xl opacity-40" />
        <Image src={code} alt="" className="w-1/3 rounded-2xl z-10" />
        <div className="absolute w-full h-screen bg-gradient-to-r from-pink to-blue rounded-full blur-3xl opacity-10" />
      </div>
    </div>
  )
}
