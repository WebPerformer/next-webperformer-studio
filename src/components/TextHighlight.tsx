'use client'
import React, { useRef, useEffect } from 'react'
import SplitType from 'split-type'

export default function TextHighlight() {
  // Text line animation on scroll
  const targetRef = useRef(null)

  useEffect(() => {
    let text: any
    const runSplit = () => {
      if (targetRef.current) {
        text = new SplitType(targetRef.current, { types: 'lines, words' })
      }

      // Create a new div element
      const lineMask = document.createElement('div')
      lineMask.className =
        'line-mask w-full h-full absolute top-0 right-0 bg-dark-600 opacity-60 z-10'

      // Append the new div element to elements with the 'line' class
      const elementsWithLineClass = document.getElementsByClassName('line')

      // Loop through the elements and append the div to each of them
      for (let i = 0; i < elementsWithLineClass.length; i++) {
        elementsWithLineClass[i].appendChild(lineMask.cloneNode(true))
      }
    }

    runSplit()

    window.addEventListener('resize', function () {
      text.revert()
      runSplit()
    })
  }, [])

  // $('.line').each(function (index) {
  //   const triggerElement = $(this)
  //   const targetElement = $(this).find('.line-mask')

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: triggerElement,
  //       start: 'top center',
  //       end: 'bottom center',
  //       scrub: 1,
  //     },
  //   })
  //   tl.to(targetElement, {
  //     width: '0%',
  //     durantion: 1,
  //   })
  // })

  return (
    <div>
      <p
        ref={targetRef}
        id="target"
        className="text-xxl text-white font-medium"
      >
        Branding is the strategic process of creating and managing a distinct
        and memorable identity for a product, service, or organization. It
        involves crafting a unique brand image, including elements such as
        logos, colors, messaging, and values, to establish a strong and
        consistent presence in the minds of consumers.
      </p>
    </div>
  )
}
