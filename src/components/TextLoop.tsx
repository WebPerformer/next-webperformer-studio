'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const texts = [
  'Product Design',
  'Redesign',
  'User Experience',
  'Design System',
  'User Interface',
  'Wireframes',
  'Prototypes',
  'Style Guide',
  'UX Research',
]

export default function TextLoop() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      key={currentTextIndex}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <h1 className="px-6 py-2 text-base text-white font-medium bg-dark-500 ring-1 ring-dark-500 rounded-xl">
        {texts[currentTextIndex]}
      </h1>
    </motion.div>
  )
}
