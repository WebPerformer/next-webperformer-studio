'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Images
import card from '../../public/images/card.png'
import card1 from '../../public/images/card-1.png'
import card2 from '../../public/images/card-2.png'
import card3 from '../../public/images/card-3.png'
import card4 from '../../public/images/card-4.png'
import card5 from '../../public/images/card-5.png'
import card6 from '../../public/images/card-6.png'

export default function Card() {
  return (
    <div className="relative my-32">
      <div className="flex justify-center">
        <Image src={card} alt="" />
      </div>
      <motion.div
        initial={{ left: '50%', scale: 1, opacity: 0 }}
        whileInView={{ left: '35%', scale: 0.9, opacity: 1 }}
        viewport={{ once: true, margin: '-200px' }}
        transition={{ type: 'tween', duration: 0.8 }}
        style={{ translateX: '-50%' }}
        className="absolute top-0 left-1/2 -z-10 blur-[1px]"
      >
        <Image src={card1} alt="" />
      </motion.div>
      <motion.div
        initial={{ right: '50%', scale: 1, opacity: 0 }}
        whileInView={{ right: '35%', scale: 0.9, opacity: 1 }}
        viewport={{ once: true, margin: '-200px' }}
        transition={{ type: 'tween', duration: 0.8 }}
        style={{ translateX: '50%' }}
        className="absolute top-0 right-1/2 -z-10 blur-[1px]"
      >
        <Image src={card2} alt="" />
      </motion.div>
      <motion.div
        initial={{ left: '50%', scale: 1, opacity: 0 }}
        whileInView={{ left: '25%', scale: 0.8, opacity: 1 }}
        viewport={{ once: true, margin: '-200px' }}
        transition={{ type: 'tween', duration: 1 }}
        style={{ translateX: '-50%' }}
        className="absolute top-0 left-1/2 -z-20 blur-[2px]"
      >
        <Image src={card3} alt="" />
      </motion.div>
      <motion.div
        initial={{ right: '50%', scale: 1, opacity: 0 }}
        whileInView={{ right: '25%', scale: 0.8, opacity: 1 }}
        viewport={{ once: true, margin: '-200px' }}
        transition={{ type: 'tween', duration: 1 }}
        style={{ translateX: '50%' }}
        className="absolute top-0 right-1/2 -z-20 blur-[2px]"
      >
        <Image src={card4} alt="" />
      </motion.div>
      <motion.div
        initial={{ left: '50%', scale: 1, opacity: 0 }}
        whileInView={{ left: '15%', scale: 0.7, opacity: 1 }}
        viewport={{ once: true, margin: '-200px' }}
        transition={{ type: 'tween', duration: 1.2 }}
        style={{ translateX: '-50%' }}
        className="absolute top-0 left-1/2 -z-30 blur-sm"
      >
        <Image src={card5} alt="" />
      </motion.div>
      <motion.div
        initial={{ right: '50%', scale: 1, opacity: 0 }}
        whileInView={{ right: '15%', scale: 0.7, opacity: 1 }}
        viewport={{ once: true, margin: '-200px' }}
        transition={{ type: 'tween', duration: 1.2 }}
        style={{ translateX: '50%' }}
        className="absolute top-0 right-1/2 -z-30 blur-sm"
      >
        <Image src={card6} alt="" />
      </motion.div>
    </div>
  )
}
