'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'

// Components
import { TextLoop, ButtonRequest } from '.'

// Images
import lines from '../../public/images/lines.svg'
import image1 from '../../public/images/image-1.jpg'
import image2 from '../../public/images/image-2.png'
import shape from '../../public/images/shape.svg'

// Icons
import { IoIosArrowDown } from 'react-icons/io'

// Fonts
import localFont from 'next/font/local'
const clash = localFont({
  src: '../../public/fonts/ClashDisplay-Medium.ttf',
})

export default function Hero() {
  return (
    <div className="relative pt-48 pb-28">
      <div className="flex gap-20 lg:flex-col">
        <div className="w-1/2 lg:w-full lg:text-center">
          <h1
            className={clsx(
              clash.className,
              'text-xxl text-white font-medium mb-5 lg:text-title',
            )}
          >
            A new branding studio created by Expiriente Freelancers
          </h1>
          <p className="text-base text-gray font-normal mb-20">
            This indicates the establishment of a business entity dedicated to
            providing branding services.
          </p>
          <div className="flex gap-5 lg:justify-center">
            <ButtonRequest textSize="text-base" />
            <div className="px-6 py-2 text-base text-white font-normal bg-dark-500 rounded-xl">
              <TextLoop />
            </div>
          </div>
        </div>
        <div className="relative w1/2 mt-3 lg:w-full">
          <div className="relative">
            <Image src={image1} alt="" className="lg:w-full rounded-2xl" />
            <div className="absolute -bottom-10 -left-10">
              <Image src={image2} alt="" />
            </div>
            <Image
              src={shape}
              alt=""
              className="absolute -top-10 -right-10 -z-10"
            />
          </div>
          <div className="absolute bottom-0 right-0 flex items-center gap-5 text-base lg:hidden">
            Scroll to explore{' '}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="px-3 py-2 text-base text-dark-500 bg-white
            rounded-xl"
            >
              <motion.div
                animate={{ y: [-10, 10], opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                <IoIosArrowDown />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Image src={lines} alt="" className="absolute top-0 -z-10 opacity-30" />
    </div>
  )
}
