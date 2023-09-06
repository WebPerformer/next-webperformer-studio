'use client'
import React, { useEffect } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import $ from 'jquery'

export default function TextHighlight() {
  gsap.registerPlugin(ScrollTrigger)

  // Text line animation on scroll
  useEffect(() => {
    let text: any

    function runSplit() {
      const currentElement = $('.split-lines')
      text = new SplitType(currentElement, { types: 'lines, words' })
      $('.line').append(
        "<div class='line-mask w-full h-full absolute top-0 right-0 bg-dark-600 opacity-60 z-10'></div>",
      )
      runAnimation()
    }

    runSplit()

    window.addEventListener('resize', function () {
      text.revert()
      runSplit()
    })

    function runAnimation() {
      $('.line').each(function (index) {
        const triggerElement = $(this)
        const targetElement = $(this).find('.line-mask')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        })
        tl.to(targetElement, {
          width: '0%',
          duration: 1,
        })
      })
    }
  }, [])

  return (
    <div>
      <p id="target" className="split-lines text-xxl text-white font-normal">
        Branding is the strategic process of creating and managing a distinct
        and memorable identity for a product, service, or organization. It
        involves crafting a unique brand image, including elements such as
        logos, colors, messaging, and values, to establish a strong and
        consistent presence in the minds of consumers.
      </p>
    </div>
  )
}
