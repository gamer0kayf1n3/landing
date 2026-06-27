import { useState } from "react"
import { config } from "../../config";
import styles from "./hero.module.css"

const imageModules400 = import.meta.glob('../../assets/images/hero/*', {
    eager: true,
    query: { format: 'webp', w: '400' }
})
const imageModules800 = import.meta.glob('../../assets/images/hero/*', {
    eager: true,
    query: { format: 'webp', w: '800' }
})
const imageModules1200 = import.meta.glob('../../assets/images/hero/*', {
    eager: true,
    query: { format: 'webp', w: '1200' }
})

const heroImages = Object.keys(imageModules400).map((key) => {
    const url400 = (imageModules400[key] as any).default
    const url800 = (imageModules800[key] as any).default
    const url1200 = (imageModules1200[key] as any).default
    return `${url400} 400w, ${url800} 800w, ${url1200} 1200w`
})
import discordLogo from "../../assets/logos/Discord-Symbol-White.svg"

import HeroCard from "../hero-card/hero-card"
import Button from "../button/button"
function Hero() {
    const [heroImage] = useState(() => {
        if (heroImages.length === 0) return ""
        const randomIndex = Math.floor(Math.random() * heroImages.length)
        return heroImages[randomIndex]
    })

    return <>
        <section className={styles.heroContainer} id="home">
            <div className={styles.heroImageContainer}>
                <img srcSet={heroImage} sizes="100vw" alt="Hero Image" />
            </div>

            <div className={styles.hero}>
                <div className={styles.heroLeft}>
                    <h1>We build.<br />We grind.<br />We vibe.</h1>
                    <h2>Sometimes all three at once.</h2>
                    <Button icon={discordLogo} bg="#5865F2" text="Join us on Discord!" fn={() => { location.href = config.discord }} />
                </div>
                <div className={styles.serverInfo}>
                    <HeroCard />
                </div>
            </div>
        </section>
    </>
}

export default Hero
