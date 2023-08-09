import React from 'react'
import Link from 'next/link'

// Fonts
import localFont from 'next/font/local'
const panchang = localFont({ src: '../../public/fonts/Panchang-Variable.ttf' })

export default function Navbar() {
  return (
    <div className="relative flex items-center justify-between">
      <Link href="/">
        <div className={`${panchang.className} text-lg font-bold`}>WP.</div>
      </Link>
      <ul className="absolute inline-flex gap-10 font-bold uppercase left-1/2 -translate-x-1/2">
        <Link href="/">
          <li className="underline underline-offset-4">Home</li>
        </Link>
        <Link href="/projects">
          <li className="text-dark opacity-50">Projects</li>
        </Link>
        <Link href="/workstation">
          <li className="text-dark opacity-50">Workstation</li>
        </Link>
        <Link href="/support">
          <li className="text-dark opacity-50">Support</li>
        </Link>
      </ul>
      <div className="flex items-center gap-10">
        <button className="px-5 py-2 font-bold text-light bg-dark uppercase">
          Request Services
        </button>
        <div className="flex items-center gap-5">
          <button className="font-bold text-dark opacity-50">BR</button>
          <div className="text-lg">|</div>
          <button className="font-bold">EN</button>
        </div>
      </div>
    </div>
  )
}
