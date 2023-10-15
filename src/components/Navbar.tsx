'use client'
import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion'
import $ from 'jquery'

// Components
import { TextLink, ButtonRequest, NavLink } from '.'

// Context
import { useStateContext } from './context/StateContext'

// Icons
import { HiMenuAlt4 } from 'react-icons/hi'
import { LiaTimesSolid } from 'react-icons/lia'

// Fonts
import localFont from 'next/font/local'
const panchang = localFont({ src: '../../public/fonts/Panchang-Variable.ttf' })

export default function Navbar() {
  // Toggle menu
  // const [open, setOpen] = useState(false)
  const { open, setOpen } = useStateContext()
  const toggleMenu = () => {
    setOpen((prevOpen: any) => !prevOpen)
  }

  // Prevent scroll on open true
  useEffect(() => {
    open
      ? $('body').css('overflow', 'hidden')
      : $('body').css('overflow', 'auto')
  }, [open])

  // Navbar hide on scroll
  const { scrollY } = useScroll()

  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 50) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: '-100px' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed flex items-center justify-between gap-10 p-5 w-full sm:w-fit sm:left-1/2 sm:!-translate-x-1/2 sm:bg-dark-500 sm:p-2 sm:rounded-2xl"
    >
      <div
        className={clsx(
          panchang.className,
          'hidden justify-center text-base font-bold hover:scale-110 transition-all duration-150 ease-linear sm:w-20 sm:flex',
        )}
      >
        <TextLink link="/" primary="text-white">
          WP.
        </TextLink>
      </div>
      <ul className="hidden sm:inline-flex sm:gap-5 sm:font-bold">
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
      <div
        onClick={toggleMenu}
        className={clsx(
          { 'text-dark-500 bg-light-gray': open },
          { 'text-white bg-dark-500': !open },
          'block text-lg p-3 rounded-md z-[60] sm:hidden transition-all ease-linear duration-200',
        )}
      >
        {open ? <LiaTimesSolid /> : <HiMenuAlt4 />}
      </div>
      <ButtonRequest />
      <AnimatePresence mode="wait">{open && <NavLink />}</AnimatePresence>
    </motion.nav>
  )
}
