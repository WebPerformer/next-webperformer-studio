'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Components
import { Skeleton, StarTitle } from '@/components'

export default function Development() {
  // Scale animation on scroll
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0 0.4'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], ['0.8', '1'])

  return (
    <div className="bg-dark-700">
      <StarTitle
        title="Frontend Development: <br /> Design Ready to Get Coded"
        subtitle="In todays rapidly evolving digital landscape, having a strong online presence is crucial for businesses to thrive. Our frontend and mobile application offers a gateway to enhancing user engagement and expanding your reach."
      />
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
        }}
        className="mt-96 text-xxl h-[500vh]"
      >
        <Skeleton />
      </motion.div>
    </div>
  )
}
