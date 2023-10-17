import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

// Images
import logo from '../../../public/images/logo.png'

export default function Hiring() {
  return (
    <div className="py-28 flex gap-40">
      <div className="w-1/3 p-10 ring-1 ring-dark-500 rounded-2xl">
        <div className="w-full flex items-center justify-center">
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className="w-2/3">
        <div className="flex gap-40">
          <div>
            <p className="text-lg text-gray">Send us a brief</p>
            <h1 className="text-xl">webperformerz@gmail.com</h1>
          </div>
          <div>
            <p className="text-lg text-gray">We are hiring</p>
            <h1 className="text-xl">Welcome to the jungle</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
