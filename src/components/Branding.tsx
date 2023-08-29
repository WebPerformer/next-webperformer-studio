'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

// Components
import { Card } from '.'

// Images
import star from '../../public/images/star.svg'
import lines from '../../public/images/lines-2.svg'

// Fonts
import localFont from 'next/font/local'
const walsheim = localFont({
  src: '../../public/fonts/GT-Walsheim-Condensed-Medium.woff2',
})

export default function Branding() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0 0.2'],
  })

  const widthProgress = useTransform(scrollYProgress, [0, 1], ['80%', '100%'])

  return (
    <div className="w-full flex justify-center overflow-clip">
      <motion.div
        ref={ref}
        style={{
          width: widthProgress,
        }}
        className="relative text-dark-500 bg-white rounded-2xl p-20 overflow-clip z-10"
      >
        <div className="">
          <Image src={star} alt="" className="w-6" />
          <h1
            className={clsx(walsheim.className, 'text-xxl font-semibold my-10')}
          >
            Unleash Your Imagination <br /> with Unimaginable Projects
          </h1>
          <p className="w-1/2 text-base text-gray translate-x-1/2">
            Step into a realm of boundless creativity and groundbreaking ideas.
            Our passion for pushing the boundaries knows no limits.
          </p>
        </div>
        <Card />
        <div className="">
          <h1
            className={clsx(walsheim.className, 'text-xxl font-semibold mb-10')}
          >
            Expertise
          </h1>
          <div className="w-full h-full flex justify-between">
            <div className="w-1/2 flex gap-32 py-10">
              <div>
                <div className="text-base text-gray font-bold mb-10">
                  Specialization
                </div>
                <ul className="grid gap-3">
                  <li className="text-lg text-dark-500 font-bold">
                    Brand Definition
                  </li>
                  <li className="text-lg text-dark-500 font-bold">
                    Brand Purpose and Values
                  </li>
                  <li className="text-lg text-dark-500 font-bold">
                    Visual Identity
                  </li>
                  <li className="text-lg text-dark-500 font-bold">
                    Customer Experience
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-base text-gray font-bold mb-10">
                  Industries
                </div>
                <ul className="grid grid-rows-4 grid-flow-col gap-y-3 gap-x-20">
                  <li className="text-lg text-dark-500 font-bold">
                    Real estate
                  </li>
                  <li className="text-lg text-dark-500 font-bold">Fintech</li>
                  <li className="text-lg text-dark-500 font-bold">Edtech</li>
                  <li className="text-lg text-dark-500 font-bold">Lodging</li>
                  <li className="text-lg text-dark-500 font-bold">Proptech</li>
                  <li className="text-lg text-dark-500 font-bold">
                    Hospitality
                  </li>
                  <li className="text-lg text-dark-500 font-bold">SaaS</li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 p-10 text-white bg-dark-500 rounded-3xl">
              <div className="text-base text-gray font-bold">Experience</div>
              <div className="text-xl my-10">
                Our crew got tons of experience, so you know we'll come through
                with cool stuff and make sure our communication game is on
                point.
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-base font-bold">Gabriel Araujo</h1>
                  <p className="text-sm text-gray">Founder & CEO</p>
                </div>
                <button>Bot</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -top-[280px] -right-[80px]">
          <Image src={lines} alt="" className="scale-105" />
        </div>
      </motion.div>
    </div>
  )
}
