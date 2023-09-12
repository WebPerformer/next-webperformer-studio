'use client'
import React, { useEffect } from 'react'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import $ from 'jquery'

// Components
import { StarTitle } from '@/components'

// Fonts
import localFont from 'next/font/local'
const panchang = localFont({
  src: '../../public/fonts/Panchang-Variable.ttf',
})

export default function BigText() {
  useEffect(() => {
    $('.header_text-move').each(function (index) {
      const triggerElement = $(this)
      const targetElement = $(this)

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: '-50px top',
          end: 'bottom top',
          scrub: 1,
        },
      })
      tl.to(targetElement, {
        y: '100%',
        duration: 1,
      })
    })
  }, [])

  return (
    <div>
      <StarTitle
        title="Passionate Design: <br /> Breathing Life into Imagination"
        subtitle="We design with passion, infusing every project with creativity and innovation that captivates and inspires. Our dedication to crafting exceptional experiences is evident in every detail, as we strive to exceed expectations and bring visions to life."
      />
      <div className="my-32">
        <ul className={clsx(panchang.className, 'text-[9vw] text-center')}>
          <li className="relative overflow-hidden">
            <h1 className="header_text-move">VISUAL</h1>
          </li>
          <li className="relative overflow-hidden">
            <h1 className="header_text-move">BRAND</h1>
          </li>
          <li className="relative overflow-hidden">
            <h1 className="header_text-move">IDENTITY</h1>
          </li>
          <li className="relative overflow-hidden">
            <h1 className="header_text-move">FOR YOUR</h1>
          </li>
          <li className="relative overflow-hidden">
            <h1 className="header_text-move">BUSINESS</h1>
          </li>
        </ul>
      </div>
    </div>
  )
}
