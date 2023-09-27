'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

// Images
import skeleton from '../../public/images/skeleton.jpg'
import design from '../../public/images/design.jpg'
import code from '../../public/images/code.png'

export default function Skeleton() {
  const ref = useRef(null)

  // Skeleton Image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })

  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 0.15, 0.2, 0.5, 0.55],
    ['0.2', '1', '1', '1', '0'],
  )
  const positionProgress = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.35, 0.5],
    ['0%', '0%', '-55%', '-55%', '0%'],
  )
  const widthProgress = useTransform(
    scrollYProgress,
    [0, 0.2, 0.85, 1],
    ['80%', '40%', '40%', '60%'],
  )

  // Text Skeleton
  const skeletonOpacityProgress = useTransform(
    scrollYProgress,
    [0.2, 0.25, 0.35],
    ['0', '1', '0'],
  )

  // Code Image
  const codeScaleProgress = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.45],
    ['1', '0.5', '0'],
  )

  const codePositionProgress = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.45, 0.5],
    ['-30%', '-30%', '-100%', '-150%'],
  )

  const codeOpacityProgress = useTransform(
    scrollYProgress,
    [0.35, 0.36, 0.43, 0.45],
    ['0', '1', '1', '0'],
  )

  // Design Image
  const designOpacityProgress = useTransform(
    scrollYProgress,
    [0.5, 0.55],
    ['0', '1'],
  )

  const designPositionProgress = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.7, 0.75, 0.85],
    ['0%', '0%', '55%', '55%', '0%'],
  )

  // Text Design
  const designTextOpacityProgress = useTransform(
    scrollYProgress,
    [0.65, 0.7, 0.8],
    ['0', '1', '0'],
  )

  return (
    <>
      <div ref={ref} className="relative h-full">
        <motion.div
          style={{ opacity: opacityProgress }}
          className="sticky top-1/2 -translate-y-1/2"
        >
          <motion.div
            style={{
              width: widthProgress,
              x: positionProgress,
            }}
            className="m-auto"
          >
            <Image
              src={skeleton}
              alt=""
              className="w-full h-fit rounded-2xl z-10"
            />
          </motion.div>
          <motion.div
            style={{
              width: widthProgress,
              opacity: skeletonOpacityProgress,
              translateY: '-50%',
            }}
            className="absolute top-1/2 right-0"
          >
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore quas repellat illo commodi harum, nisi libero maxime
              iure debitis qui?
            </p>
          </motion.div>
          <motion.div
            style={{
              width: widthProgress,
              x: codePositionProgress,
              scale: codeScaleProgress,
              opacity: codeOpacityProgress,
              translateY: '-50%',
            }}
            className="absolute top-1/2 right-0 m-auto"
          >
            <Image
              src={code}
              alt=""
              className="w-full h-fit rounded-2xl z-10"
            />
          </motion.div>
        </motion.div>
        <motion.div
          style={{ opacity: designOpacityProgress }}
          className="sticky top-1/2 -translate-y-1/2"
        >
          <motion.div
            style={{
              width: widthProgress,
              x: designPositionProgress,
            }}
            className="m-auto"
          >
            <Image
              src={design}
              alt=""
              className="w-full h-fit rounded-2xl z-10"
            />
          </motion.div>
          <motion.div
            style={{
              width: widthProgress,
              opacity: designTextOpacityProgress,
              translateY: '-50%',
            }}
            className="absolute top-1/2 left-0"
          >
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore quas repellat illo commodi harum, nisi libero maxime
              iure debitis qui?
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}
