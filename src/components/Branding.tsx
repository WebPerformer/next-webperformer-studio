'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

// Images
import star from '../../public/images/star.svg'

// Fonts
import localFont from 'next/font/local'
const panchang = localFont({
  src: '../../public/fonts/Panchang-Variable.ttf',
})

export default function Branding() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0 0.2'],
  })

  const widthProgress = useTransform(scrollYProgress, [0, 1], ['80%', '100%'])

  return (
    <div className="w-full flex justify-center">
      <motion.div
        ref={ref}
        style={{
          width: widthProgress,
        }}
        className="text-dark-500 bg-white rounded-2xl p-10"
      >
        <div>
          <Image src={star} alt="" className="w-6" />
          <h1
            className={clsx(panchang.className, 'text-xl font-semibold my-10')}
          >
            Unleash Your Imagination <br /> with Unimaginable Projects
          </h1>
          <p className="w-1/2 text-base text-gray translate-x-1/2">
            Step into a realm of boundless creativity and groundbreaking ideas.
            Our passion for pushing the boundaries knows no limits, and our
            portfolio of unimaginable projects is a testament to our unwavering
            commitment to innovation.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
