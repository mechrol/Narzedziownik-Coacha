import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ModuleForm from './components/ModuleForm'
import Results from './components/Results'
import { FormProvider } from './context/FormContext'

function App() {
  return (
    <FormProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/modul/:topicId/:moduleId" element={<ModuleForm />} />
          <Route path="/wyniki/:topicId/:moduleId" element={<Results />} />
        </Routes>
      </div>
    </FormProvider>
  )
}

export default App
