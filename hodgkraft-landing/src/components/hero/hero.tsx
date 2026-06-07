import { useState } from "react"

import styles from "./hero.module.css"

const imageModules = import.meta.glob('../../assets/images/hero/*.png', { eager: true })
const heroImages = Object.values(imageModules).map((mod: any) => mod.default)

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
        <section className={styles.heroContainer}>
            <div className={styles.heroImageContainer}>
                <img src={heroImage} alt="Hero Image" />
            </div>

            <div className={styles.hero}>
                <div className={styles.heroLeft}>
                    <h1>We build.<br />We grind.<br />We vibe.</h1>
                    <h2>Sometimes all three at once.</h2>
                    <Button icon={discordLogo} bg="#5865F2" text="Join us on Discord!" />
                </div>
                <div className={styles.serverInfo}>
                    <HeroCard />
                </div>
            </div>
        </section>
    </>
}

export default Hero
