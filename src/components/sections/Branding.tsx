'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Components
import { BrandingCards, TextHighlight } from '..'

export default function Branding() {
  // Scale & opacity animation
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center start', 'end start'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], ['1', '0.6'])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], ['1', '0'])

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="p-0 sm:bg-dark-600 rounded-2xl sm:p-10 md:p-20"
    >
      <div className="flex items-end justify-between">
        <div className="text-lg">
          <p>Full-service agency.</p>
          <p>Two engagement models.</p>
        </div>
        <div className="hidden text-base sm:block">
          <h1>WebPerformer Studio.</h1>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray my-5 opacity-50" />
      <TextHighlight />
      <BrandingCards />
    </motion.div>
  )
}
