import React from 'react'
import clsx from 'clsx'

// Components
import { TextLink } from '@/components'

interface ButtonProps {
  textSize?: string
}

const ButtonRequest: React.FC<ButtonProps> = ({ textSize }) => {
  return (
    <div className="relative group font-bold z-10">
      <TextLink
        link="/service"
        primary="text-dark-500"
        secondary="text-dark-700"
        button={clsx(
          textSize,
          'w-full px-6 py-2 bg-white rounded-xl whitespace-nowrap group-hover:scale-105 transition-all duration-500 ease-linear',
        )}
      >
        Request Service
      </TextLink>
      <div className="glow absolute top-0 left-0 w-full h-full -z-[1] blur-md rounded-xl group-hover:blur-md transition-all duration-150 ease-linear" />
    </div>
  )
}

export default ButtonRequest
