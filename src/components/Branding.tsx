'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

// Components
import { Card } from '.'

// Images
import star from '../../public/images/star.svg'
import lines from '../../public/images/lines-2.svg'

// Fonts
import localFont from 'next/font/local'
const walsheim = localFont({
  src: '../../public/fonts/GT-Walsheim-Condensed-Medium.woff2',
})

export default function Branding() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0 0.2'],
  })

  const widthProgress = useTransform(scrollYProgress, [0, 1], ['70%', '100%'])

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <motion.div
        ref={ref}
        style={{
          width: widthProgress,
        }}
        className="relative text-dark-500 bg-white rounded-2xl p-10 overflow-hidden z-10"
      >
        <div className="mb-32">
          <Image src={star} alt="" className="w-6" />
          <h1
            className={clsx(walsheim.className, 'text-xxl font-semibold my-10')}
          >
            Unleash Your Imagination <br /> with Unimaginable Projects
          </h1>
          <p className="w-1/2 text-base text-gray translate-x-1/2">
            Step into a realm of boundless creativity and groundbreaking ideas.
            Our passion for pushing the boundaries knows no limits.
          </p>
        </div>
        <Card />
        <div className="absolute -top-[280px] -right-[80px]">
          <Image src={lines} alt="" className="scale-105" />
        </div>
      </motion.div>
    </div>
  )
}
