'use client'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { motion, useScroll } from 'framer-motion'

// Components
import { TextLink, ButtonRequest } from '@/components'

// Fonts
import localFont from 'next/font/local'
const panchang = localFont({ src: '../../public/fonts/Panchang-Variable.ttf' })

export default function Navbar() {
  const [top, setTop] = useState(30)

  const { scrollYProgress } = useScroll()

  useEffect(() => {
    let previousScrollY = scrollYProgress.get()

    const handleScroll = () => {
      const currentScrollY = scrollYProgress.get()
      if (currentScrollY < previousScrollY) {
        setTop(30)
      } else {
        setTop(-90)
      }
      previousScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      style={{
        top: `${top}px`,
      }}
      className="fixed left-1/2 -translate-x-1/2 w-fit bg-dark-500 flex items-center justify-between gap-10 p-2 rounded-2xl transition-all duration-700 ease-in-out"
    >
      <div
        className={clsx(
          panchang.className,
          'w-20 flex justify-center font-bold hover:scale-110 transition-all duration-150 ease-linear',
        )}
      >
        <TextLink link="/" primary="text-white">
          WP.
        </TextLink>
      </div>
      <ul className="inline-flex gap-5 font-bold">
        <li>
          <TextLink link="/projects" primary="text-gray">
            Projects
          </TextLink>
        </li>
        <li>
          <TextLink link="/workstation" primary="text-gray">
            Workstation
          </TextLink>
        </li>
        <li>
          <TextLink link="/support" primary="text-gray">
            Support
          </TextLink>
        </li>
      </ul>
      <ButtonRequest />
    </motion.div>
  )
}
