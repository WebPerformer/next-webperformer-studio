import React from 'react'
import clsx from 'clsx'

// Icons
import { IoIosArrowUp } from 'react-icons/io'
import { IoShareSocialOutline } from 'react-icons/io5'

// Fonts
import localFont from 'next/font/local'
const panchang = localFont({
  src: '../../public/fonts/Panchang-Variable.ttf',
})

export default function Footer() {
  return (
    <div>
      <div className="text-center mb-32">
        <h1 className={clsx(panchang.className, 'text-title')}>
          DISCOVER <br /> <span className="font-bold">OUR STUDIO</span>
        </h1>
        <p className="text-base text-gray">
          Explore our World of Visual Design
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 text-base">
          <IoIosArrowUp /> Back to top
        </div>
        <div className="text-base">
          2023 © <span className="text-gray font-medium">Webperformer</span>.
          All rights reserved.
        </div>
        <div className="flex items-center gap-5 text-base">
          Follow us <IoShareSocialOutline />
        </div>
      </div>
    </div>
  )
}
