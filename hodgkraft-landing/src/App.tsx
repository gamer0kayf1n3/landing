import './App.css'
import { createContext, useContext, useState } from 'react'

import Header from './components/header/header.tsx'
import Hero from './components/hero/hero.tsx'
import Toast from './components/toast/toast.tsx'
export const ToastContext = createContext<(msg: string) => void>(() => {})

function App() {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const triggerToast = (msg: string) => {
    setToastMessage(msg)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  return (
    <ToastContext.Provider value={triggerToast}>
      <Header />
      <Hero />
      <Toast message={toastMessage} show={showToast} />
    </ToastContext.Provider>
  )
}

export default App
