'use client'
import React from 'react'
import clsx from 'clsx'

// Icons
import { ImArrowUpRight2 } from 'react-icons/im'

// Fonts
import localFont from 'next/font/local'
const clash = localFont({
  src: '../../../public/fonts/ClashDisplay-Medium.ttf',
})

export default function Expertise() {
  return (
    <div className="pt-28 pb-10 lg:py-28">
      <h1
        className={clsx(
          clash.className,
          'text-xxl text-white font-medium mb-12',
        )}
      >
        Expertise
      </h1>
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full block py-10 sm:flex lg:w-1/2">
          <div className="w-full mb-10 sm:w-1/2 sm:mb-0">
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
          <div className="w-full sm:w-1/2">
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
        <div className="relative w-full h-fit bg-dark-600 rounded-2xl p-5 overflow-hidden lg:w-1/2 lg:p-10">
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
          <div className="block items-end justify-between lg:flex">
            <div className="mb-10 lg:mb-0">
              <h1 className="text-base">Gabriel Araujo</h1>
              <p className="text-sm text-gray">Founder & CEO</p>
            </div>
            <button className="w-full px-7 py-5 bg-dark-500 flex items-center justify-center gap-4 rounded-2xl lg:w-fit lg:py-4">
              Request Service{' '}
              <span className="text-dark-400">
                <ImArrowUpRight2 />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
