import { useState, useEffect } from "react"

function Notification({ message, duration = 3000 }: { message: string, duration?: number }) {
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 10)
    const fadeTimer = setTimeout(() => setFading(true), duration - 500)
    return () => {
      clearTimeout(showTimer)
      clearTimeout(fadeTimer)
    }
  }, [duration])

  return (
    <div style={{
      position: "fixed",
      top: fading ? "-100px" : visible ? "20px" : "-100px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#333",
      color: "white",
      padding: "12px 24px",
      borderRadius: "8px",
      transition: "top 0.5s ease, opacity 0.5s ease",
      opacity: fading ? 0 : visible ? 1 : 0,
      zIndex: 9999,
    }}>
      {message}
    </div>
  )
}

export default Notification