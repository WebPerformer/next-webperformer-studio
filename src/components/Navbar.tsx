import React from 'react'

// Fonts
import localFont from 'next/font/local'
const panchang = localFont({ src: '../../public/fonts/Panchang-Variable.ttf' })

export default function Navbar() {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bg-dark-500 flex items-center justify-between gap-10 p-2 rounded-2xl">
      <div className={`${panchang.className} w-20 text-center font-bold`}>
        WP.
      </div>
      <ul className="inline-flex gap-5 text-gray font-bold">
        <li>Projects</li>
        <li>Workstation</li>
        <li>Support</li>
      </ul>
      <div className="relative">
        <button className="px-6 py-2 text-dark-500 font-bold bg-white overflow-hidden rounded-xl z-10">
          Request Service
        </button>
        <div className="glow absolute top-0 left-0 w-full h-full -z-[1]" />
      </div>
    </div>
  )
}
