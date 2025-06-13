import type React from 'react'
import { type ReactNode, createContext, useContext, useState } from 'react'

interface ModalComponentContextType {
  component: ReactNode | null
  setComponent: (component: ReactNode | null) => void
}

const ModalComponentContext = createContext<
  ModalComponentContextType | undefined
>(undefined)

export const ModalComponentProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [component, setComponent] = useState<ReactNode | null>(null)

  return (
    <ModalComponentContext.Provider value={{ component, setComponent }}>
      {children}
    </ModalComponentContext.Provider>
  )
}

export const useModalComponent = () => {
  const context = useContext(ModalComponentContext)
  if (context === undefined) {
    throw new Error(
      'useModalComponent must be used within a ModalComponentProvider',
    )
  }
  return context
}
