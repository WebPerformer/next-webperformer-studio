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
        whileInView={{ left: '40%', scale: 0.8, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 1 }}
        style={{ translateX: '-50%' }}
        className="absolute top-0 left-1/2 -z-10 brightness-125 blur-[2px]"
      >
        <Image src={card} alt="" />
      </motion.div>
      <motion.div
        initial={{ right: '50%', scale: 1, opacity: 0 }}
        whileInView={{ right: '40%', scale: 0.8, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 1 }}
        style={{ translateX: '50%' }}
        className="absolute top-0 right-1/2 -z-10 brightness-125 blur-[2px]"
      >
        <Image src={card} alt="" />
      </motion.div>
      <motion.div
        initial={{ left: '50%', scale: 1, opacity: 0 }}
        whileInView={{ left: '30%', scale: 0.6, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 1.6 }}
        style={{ translateX: '-50%' }}
        className="absolute top-0 left-1/2 -z-20 blur-sm"
      >
        <Image src={card} alt="" />
      </motion.div>
      <motion.div
        initial={{ right: '50%', scale: 1, opacity: 0 }}
        whileInView={{ right: '30%', scale: 0.6, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 1.6 }}
        style={{ translateX: '50%' }}
        className="absolute top-0 right-1/2 -z-20 blur-sm"
      >
        <Image src={card} alt="" />
      </motion.div>
      <motion.div
        initial={{ left: '50%', scale: 1, opacity: 0 }}
        whileInView={{ left: '25%', scale: 0.4, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 1.6 }}
        style={{ translateX: '-50%' }}
        className="absolute top-0 left-1/2 -z-30 blur-md"
      >
        <Image src={card} alt="" />
      </motion.div>
      <motion.div
        initial={{ right: '50%', scale: 1, opacity: 0 }}
        whileInView={{ right: '25%', scale: 0.4, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'tween', duration: 1.6 }}
        style={{ translateX: '50%' }}
        className="absolute top-0 right-1/2 -z-30 blur-md"
      >
        <Image src={card} alt="" />
      </motion.div>
    </div>
  )
}
