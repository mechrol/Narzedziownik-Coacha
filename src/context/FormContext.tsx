import React, { createContext, useContext, useState, ReactNode } from 'react'

interface FormData {
  [key: string]: string
}

interface FormContextType {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  resetFormData: () => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export const useForm = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useForm must be used within a FormProvider')
  }
  return context
}

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({})

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const resetFormData = () => {
    setFormData({})
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  )
}
