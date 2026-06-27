import './App.css'
import { createContext, useContext, useState } from 'react'

import Header from './components/header/header.tsx'
import Hero from './components/hero/hero.tsx'
import Gamemodes from './components/gamemodes/gamemodes.tsx'
import Toast from './components/toast/toast.tsx'
import Discord from './components/discord/discord.tsx'
import Footer from './components/footer/footer.tsx'
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
      <Gamemodes />
      <hr />
      <Discord />
      <hr />
      <Footer />
      <Toast message={toastMessage} show={showToast} />
    </ToastContext.Provider>
  )
}

export default App
