import React from 'react'

// Fonts
import localFont from 'next/font/local'
const panchang = localFont({ src: '../../public/fonts/Panchang-Variable.ttf' })

export default function Navbar() {
  return (
    <div className="relative flex items-center justify-between">
      <div className={`${panchang.className} text-2xl font-bold`}>WP.</div>
      <ul className="absolute inline-flex gap-10 font-semibold uppercase left-1/2 -translate-x-1/2">
        <li className="underline underline-offset-4">Home</li>
        <li className="text-dark opacity-50">Projects</li>
        <li className="text-dark opacity-50">Workstation</li>
        <li className="text-dark opacity-50">Support</li>
      </ul>
      <div className="flex items-center gap-10">
        <button className="px-5 py-2 font-semibold text-light bg-dark uppercase">
          Request Services
        </button>
        <div className="flex items-center gap-5">
          <button className="font-semibold text-dark opacity-50">BR</button>
          <div>|</div>
          <button className="font-semibold">EN</button>
        </div>
      </div>
    </div>
  )
}
