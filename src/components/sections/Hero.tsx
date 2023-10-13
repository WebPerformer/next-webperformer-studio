'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

// Images
import lines from '../../../public/images/lines.svg'

// Components
import { TextLoop, ButtonRequest } from '@/components'

// Icons
import { IoIosArrowDown } from 'react-icons/io'

// Fonts
import localFont from 'next/font/local'
const clash = localFont({
  src: '../../../public/fonts/ClashDisplay-Medium.ttf',
})

export default function Hero() {
  // Scale & opacity animation
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], ['1', '0.6'])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], ['1', '0'])

  return (
    <motion.section
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="block lg:flex lg:gap-20">
        <div className="w-full mb-10 lg:w-1/2 lg:mb-0">
          <h1
            className={clsx(
              clash.className,
              'text-title text-white font-medium mb-5 lg:text-left lg:text-xxl',
            )}
          >
            A New Branding Studio Created By Expiriente Freelancers
          </h1>
          <p className="text-base text-gray font-normal mb-10 lg:mb-20 lg:text-left lg:block">
            Unlocking creativity through the collaboration of seasoned
            freelancers. Welcome to the future of branding with Expiriente
            Studio.
          </p>
          <div className="flex lg:gap-5">
            <ButtonRequest textSize="hidden text-base lg:block" />
            <TextLoop />
          </div>
        </div>
        <div className="relative w-full lg:w-1/2">
          <div className="relative w-full h-80 bg-dark-600 rounded-2xl lg:h-[80%]"></div>
          <div className="hidden absolute bottom-0 right-0 lg:flex items-center gap-5 text-base">
            Scroll to explore{' '}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="px-3 py-2 text-base text-dark-600 bg-white
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
      <Image
        src={lines}
        alt=""
        className="hidden absolute top-0 -z-10 opacity-30"
      />
    </motion.section>
  )
}
