'use client'
import React from 'react'
import { motion } from 'framer-motion'

// Components
import { TextLink, Curve } from '.'

// navbar links
const navItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Workstation',
    href: '/workstation',
  },
  {
    title: 'Support',
    href: '/support',
  },
  {
    title: 'Our Services',
    href: '/service',
  },
]

export default function NavLink() {
  const menuVars = {
    initial: {
      x: '-100%',
    },
    animate: {
      x: '0%',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      x: '-100%',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  const slideVars = {
    initial: { x: -80 },
    animate: (i: any) => ({
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i },
    }),
    exit: (i: any) => ({
      x: -80,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i },
    }),
  }

  const opacityVars = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  return (
    <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute block top-0 left-0 w-full h-screen bg-white z-50 p-5 origin-top sm:hidden"
    >
      <Curve />
      <div className="inline-grid gap-5 text-link font-semibold mt-20 mb-20">
        {navItems.map((data, index) => {
          return (
            <motion.div
              key={index}
              custom={index}
              variants={slideVars}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <TextLink
                link={data.href}
                primary="text-dark-600"
                secondary="text-gray"
              >
                {data.title}
              </TextLink>
            </motion.div>
          )
        })}
      </div>
      <motion.div
        variants={opacityVars}
        initial="initial"
        animate="animate"
        exit="exit"
        className="text-base text-gray font-semibold"
      >
        Privacy Policy
      </motion.div>
    </motion.div>
  )
}
