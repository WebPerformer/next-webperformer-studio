'use client'
import React, { createContext, useContext, useState } from 'react'

const Context = createContext()

export const StateContext = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <Context.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
