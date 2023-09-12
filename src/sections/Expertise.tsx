'use client'
import React from 'react'
import clsx from 'clsx'

// Icons
import { ImArrowUpRight2 } from 'react-icons/im'

// Fonts
import localFont from 'next/font/local'
const clash = localFont({
  src: '../../public/fonts/ClashDisplay-Medium.ttf',
})

export default function Expertise() {
  return (
    <div className="py-28">
      <h1
        className={clsx(
          clash.className,
          'text-xxl text-white font-medium mb-12',
        )}
      >
        Expertise
      </h1>
      <div className="flex">
        <div className="w-1/2 flex py-10">
          <div className="w-1/2">
            <h1
              className={clsx(
                clash.className,
                'text-base text-gray font-medium mb-10',
              )}
            >
              Specialization
            </h1>
            <ul className="grid grid-rows-4 grid-flow-col gap-4">
              <li className="text-lg">Brand Definition</li>
              <li className="text-lg">Brand Purpose and Values</li>
              <li className="text-lg">Visual Identity</li>
              <li className="text-lg">Customer Experience</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h1
              className={clsx(
                clash.className,
                'text-base text-gray font-medium mb-10',
              )}
            >
              Industries
            </h1>
            <ul className="grid grid-rows-4 grid-flow-col gap-4">
              <li className="text-lg">Real estate</li>
              <li className="text-lg">Fintech</li>
              <li className="text-lg">Edtech</li>
              <li className="text-lg">Lodging</li>
              <li className="text-lg">Proptech</li>
              <li className="text-lg">Hospitality</li>
              <li className="text-lg">SaaS</li>
            </ul>
          </div>
        </div>
        <div className="relative w-1/2 h-fit bg-dark-600 rounded-2xl p-10 overflow-hidden">
          <h1
            className={clsx(clash.className, 'text-base text-gray font-medium')}
          >
            Experience
          </h1>
          <p className="text-lg my-10">
            Our team boasts a wealth of experience, assuring you that we will
            deliver impressive results and ensure our communication is
            impeccable.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-base">Gabriel Araujo</h1>
              <p className="text-sm text-gray">Founder & CEO</p>
            </div>
            <button className="flex items-center gap-4">
              Request Service{' '}
              <span className="p-3 text-dark-400 bg-blue rounded-full">
                <ImArrowUpRight2 />
              </span>
            </button>
          </div>
          <div className="absolute -top-2/3 -right-1/3 w-full h-[600px] bg-gradient-to-br from-pink to-blue rounded-[50%] blur-[100px] opacity-10 -rotate-12" />
        </div>
      </div>
    </div>
  )
}
