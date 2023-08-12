'use client'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import hero from '../../public/images/hero.jpg'

export default function HeroImage() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  return (
    <motion.div style={{ scaleX: scrollYProgress }}>
      <Image
        src={hero}
        alt=""
        className="w-2/3 h-[500px] m-auto object-cover"
      />
    </motion.div>
  )
}
