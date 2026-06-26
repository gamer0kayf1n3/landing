import styles from "./discord.module.css"

import Button from "../button/button"
import discordLogo from '../../assets/logos/Discord-Symbol-White.svg'

function Discord() {
    return (
        <div className={styles.discord}>
            <p className={styles.ctaText}>Chat, play, and build with the Hodgkraft community on Discord.</p>
            <Button icon={discordLogo} bg="#5865F2" text="Join us on Discord!" fn={() => {}} />
        </div>
    )
}

export default Discord