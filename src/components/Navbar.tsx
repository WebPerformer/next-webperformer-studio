import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

// Components
import { TextLink } from '@/components'

// Fonts
import localFont from 'next/font/local'
const panchang = localFont({ src: '../../public/fonts/Panchang-Variable.ttf' })

export default function Navbar() {
  return (
    <div className="w-fit bg-dark-500 flex items-center justify-between gap-10 p-2 rounded-2xl">
      <Link href="/">
        <div
          className={clsx(
            panchang.className,
            'w-20 text-center font-bold hover:scale-110 transition-all duration-150 ease-linear',
          )}
        >
          WP.
        </div>
      </Link>
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
      <div className="relative group font-bold z-10">
        <TextLink
          link="/service"
          primary="text-dark-500"
          secondary="text-dark-700"
          button="w-full px-6 py-2 bg-white rounded-xl whitespace-nowrap group-hover:scale-105 transition-all duration-500 ease-linear"
        >
          Request Service
        </TextLink>
        <div className="glow absolute top-0 left-0 w-full h-full -z-[1] blur-md group-hover:blur-xl transition-all duration-150 ease-linear" />
      </div>
    </div>
  )
}
