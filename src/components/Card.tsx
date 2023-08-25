'use client'
import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

// Images
import card from '../../public/images/card.png'

export default function Card() {
  return (
    <div className="sticky top-1/2 -translate-y-1/2 flex justify-center">
      <Image src={card} alt="" className="rotate-12" />
    </div>
  )
}
