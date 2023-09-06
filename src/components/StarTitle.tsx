import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

// Images
import star from '../../public/images/star.svg'

// Fonts
import localFont from 'next/font/local'
const clash = localFont({
  src: '../../public/fonts/ClashDisplay-Medium.ttf',
})

interface TitleProps {
  title: string
  subtitle: string
}

const StarTitle: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="">
      <Image src={star} alt="" className="w-6" />
      <h1
        className={clsx(
          clash.className,
          'text-xxl text-white font-medium my-10',
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      <p className="w-1/2 text-base text-gray translate-x-1/2">{subtitle}</p>
    </div>
  )
}

export default StarTitle
