'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Components
import { BrandingCards, StarTitle, TextHighlight } from '.'

// Images
import lines from '../../public/images/lines-2.svg'

export default function Branding() {
  // Animation on margin size on scroll
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0 0.4'],
  })
  const widthProgress = useTransform(scrollYProgress, [0, 1], ['90%', '100%'])

  return (
    <div className="relative w-full flex justify-center overflow-clip">
      <motion.div
        ref={ref}
        style={{
          width: widthProgress,
        }}
        className="relative text-white bg-dark-600 rounded-2xl p-20 overflow-clip z-10"
      >
        <StarTitle
          title="Unleash Your Imagination <br /> With Unimaginable Projects"
          subtitle="Step into a realm of boundless creativity and groundbreaking ideas. Our passion for pushing the boundaries knows no limits."
        />
        <BrandingCards />
        <TextHighlight />
        <div className="absolute -top-[280px] -right-[20px]">
          <Image src={lines} alt="" className="scale-125" />
        </div>
      </motion.div>
    </div>
  )
}
