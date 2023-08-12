'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'

interface LinkProps {
  children?: React.ReactNode
  link?: string
  primary?: string
  secondary?: string
  button?: string
}

const TextLink: React.FC<LinkProps> = ({
  children,
  link,
  primary,
  secondary,
  button,
}) => {
  const [handleHover, setHandleHover] = useState(false)

  if (!link) {
    return null
  }

  return (
    <Link
      href={link}
      onMouseEnter={() => setHandleHover(true)}
      onMouseLeave={() => setHandleHover(false)}
    >
      <div className={clsx(button)}>
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ translateY: handleHover ? '-100%' : '0' }}
            transition={{
              ease: 'linear',
              duration: 0.1,
            }}
            className={clsx('link-text block', primary)}
          >
            {children}
          </motion.div>
          <motion.div
            animate={{ translateY: handleHover ? '-100%' : '0' }}
            transition={{
              ease: 'linear',
              duration: 0.1,
            }}
            className={clsx('link-text top-full block absolute', secondary)}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </Link>
  )
}

export default TextLink
