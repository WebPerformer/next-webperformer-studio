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
import shape from '../../public/images/shape.svg'

// Fonts
import localFont from 'next/font/local'
const walsheim = localFont({
  src: '../../public/fonts/GT-Walsheim-Condensed-Black.woff2',
})
const saol = localFont({
  src: '../../public/fonts/SaolDisplay-LightItalic.woff2',
})

export default function Branding() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0 0.2'],
  })

  const widthProgress = useTransform(scrollYProgress, [0, 1], ['80%', '100%'])

  return (
    <div className="relative w-full flex justify-center overflow-clip">
      <motion.div
        ref={ref}
        style={{
          width: widthProgress,
        }}
        className="relative text-white bg-dark-600 rounded-2xl p-20 overflow-clip z-10"
      >
        <div className="">
          <Image src={star} alt="" className="w-6" />
          <h1
            className={clsx(walsheim.className, 'text-xxl font-semibold my-10')}
          >
            Unleash Your Imagination
            <br /> with{' '}
            <span
              className={clsx(
                saol.className,
                'h-fit font-bold text-transparent bg-clip-text bg-gradient-to-tr from-pink to-blue',
              )}
            >
              Unimaginable
            </span>{' '}
            Projects
          </h1>
          <p className="w-1/2 text-base text-gray translate-x-1/2">
            Step into a realm of boundless creativity and groundbreaking ideas.
            Our passion for pushing the boundaries knows no limits.
          </p>
        </div>
        <div className="relative">
          <Card />
          <Image
            src={shape}
            alt=""
            className="absolute top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 -z-40 blur-lg"
          />
        </div>
        <div className="">
          <h1
            className={clsx(walsheim.className, 'text-xxl font-semibold mb-10')}
          >
            Expertise
          </h1>
          <div className="w-full h-full flex justify-between">
            <div className="w-1/2 flex gap-[4vw] py-10">
              <div>
                <div className="text-base text-gray font-bold mb-10">
                  Specialization
                </div>
                <ul className="grid grid-rows-4 grid-flow-col gap-y-3 gap-x-10">
                  <li className="text-lg text-dark-400 font-bold">
                    Brand Definition
                  </li>
                  <li className="text-lg text-dark-400 font-bold">
                    Brand Purpose and Values
                  </li>
                  <li className="text-lg text-dark-400 font-bold">
                    Visual Identity
                  </li>
                  <li className="text-lg text-dark-400 font-bold">
                    Customer Experience
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-base text-gray font-bold mb-10">
                  Industries
                </div>
                <ul className="grid grid-rows-4 grid-flow-col gap-y-3 gap-x-10">
                  <li className="text-lg text-dark-400 font-bold">
                    Real estate
                  </li>
                  <li className="text-lg text-dark-400 font-bold">Fintech</li>
                  <li className="text-lg text-dark-400 font-bold">Edtech</li>
                  <li className="text-lg text-dark-400 font-bold">Lodging</li>
                  <li className="text-lg text-dark-400 font-bold">Proptech</li>
                  <li className="text-lg text-dark-400 font-bold">
                    Hospitality
                  </li>
                  <li className="text-lg text-dark-400 font-bold">SaaS</li>
                </ul>
              </div>
            </div>
            <div className="relative w-1/2 p-10 text-white bg-dark-500 rounded-3xl overflow-hidden">
              <div className="relative z-10">
                <div className="text-base text-gray font-bold">Experience</div>
                <div className="text-xl my-10">
                  Our team boasts a wealth of experience, assuring you that we
                  will deliver impressive results and ensure our communication
                  is impeccable.
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-base font-bold">Gabriel Araujo</h1>
                    <p className="text-sm text-gray">Founder & CEO</p>
                  </div>
                  <button>Request Service</button>
                </div>
              </div>
              <div className="absolute -top-2/3 -right-1/3 w-full h-[600px] bg-gradient-to-br from-pink to-blue rounded-[50%] blur-[100px] opacity-30 -rotate-12" />
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
