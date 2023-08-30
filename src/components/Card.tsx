'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Images
import card from '../../public/images/card.png'

export default function Card() {
  return (
    <div className="relative my-24">
      <div className="flex justify-center">
        <Image src={card} alt="" />
      </div>
      <motion.div
        initial={{ left: '50%', scale: 1, opacity: 0 }}
        whileInView={{ left: '35%', scale: 0.9, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 0.8 }}
        style={{ translateX: '-50%' }}
        className="absolute top-0 left-1/2 -z-10 blur-[1px]"
      >
        <Image src={card} alt="" />
      </motion.div>
      <motion.div
        initial={{ right: '50%', scale: 1, opacity: 0 }}
        whileInView={{ right: '35%', scale: 0.9, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 0.8 }}
        style={{ translateX: '50%' }}
        className="absolute top-0 right-1/2 -z-10 blur-[1px]"
      >
        <Image src={card} alt="" />
      </motion.div>
      <motion.div
        initial={{ left: '50%', scale: 1, opacity: 0 }}
        whileInView={{ left: '25%', scale: 0.8, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 1 }}
        style={{ translateX: '-50%' }}
        className="absolute top-0 left-1/2 -z-20 blur-[2px]"
      >
        <Image src={card} alt="" />
      </motion.div>
      <motion.div
        initial={{ right: '50%', scale: 1, opacity: 0 }}
        whileInView={{ right: '25%', scale: 0.8, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 1 }}
        style={{ translateX: '50%' }}
        className="absolute top-0 right-1/2 -z-20 blur-[2px]"
      >
        <Image src={card} alt="" />
      </motion.div>
      <motion.div
        initial={{ left: '50%', scale: 1, opacity: 0 }}
        whileInView={{ left: '15%', scale: 0.7, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 1.2 }}
        style={{ translateX: '-50%' }}
        className="absolute top-0 left-1/2 -z-30 blur-sm"
      >
        <Image src={card} alt="" />
      </motion.div>
      <motion.div
        initial={{ right: '50%', scale: 1, opacity: 0 }}
        whileInView={{ right: '15%', scale: 0.7, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 1.2 }}
        style={{ translateX: '50%' }}
        className="absolute top-0 right-1/2 -z-30 blur-sm"
      >
        <Image src={card} alt="" />
      </motion.div>
    </div>
  )
}
