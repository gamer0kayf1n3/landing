import Button from "./components/Button.tsx"
import TextInput from "./components/TextInput.tsx"
import Notification from "./components/Notification.tsx"
import './App.css'
import { useState, useEffect } from "react"


function App() {
  const [show, setShow] = useState(false)


  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href')
      if (!href || href.startsWith('/') || href.startsWith('#')) return
      e.preventDefault()
      if (confirm(`You're leaving Hodgkraft. Continue to ${href}?`)) {
        location.href = href
      }
    }
  
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  
  return (
    <>
      <div id="header">
        <span id="header-logo">Hodgkraft Server</span>
        <Button color="white" bg="darkblue" title="Sign In" href="/panel/dashboard" />
      </div>

      <div id="hero">
        <p id="hero-text-1">We build, we grind, we vibe.</p>
        <p id="hero-text-2">Sometimes all three at once.</p>
      </div>

      <div id="server">
        <p id="server-inv">Join the Hodgkraft Server now!</p>
        <p id="server-ps">PS: Joining method is by referral. Contact us on <a href="https://discord.gg/BJRGxuGAEa">Discord</a>!</p>

        <div id="servercopier">
          <TextInput text="hodgkraft.duckdns.org" allowEdit={false} />
          <Button color="white" bg="#111111" title="Copy" fn={() => {
            navigator.clipboard.writeText("hodgkraft.duckdns.org");
            setShow(true);
            setTimeout(() => setShow(false), 2000);
          }} />
        </div>

          <div id="vers">
            <Button color="white" bg="#00af5c" title="Java 1.21.11" />
            <Button color="white" bg="#005caf" title="Bedrock 1.21.130-26.10" />
          </div>
        {show && <Notification message="Copied!" duration={2000} />}
      </div>
      <div id="footer">

        <div id="fineprint">
          <p>Hodgkraft Server is not associated with Mojang Studios, Microsoft, and/or any of its affiliates. Don't sue us, thanks!</p>
        </div>
      </div>
    </>
  )
}

export default App
