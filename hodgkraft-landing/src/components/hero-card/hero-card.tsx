import styles from './hero-card.module.css'

import MinecraftInput from "../minecraft-input/minecraft-input"
import MinecraftButton from "../minecraft-button/minecraft-button"

import TagList from "../tag-list/tag-list"
import Tag from "../tag/tag"

import { motion } from "motion/react"
import { useEffect, useState } from 'react'

const imageModules = import.meta.glob('../../assets/logos/*', { eager: true })
const logos: Record<string, string> = Object.fromEntries(
    Object.entries(imageModules).map(([path, mod]: [string, any]) => [
        path.split('/').pop()!, // just the filename
        mod.default
    ])
)
function HeroCard() {
    const [online, setOnline] = useState(null);
    const [players, setPlayers] = useState(null);

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const res = await fetch('https://api.mcsrvstat.us/3/hodgkraft.duckdns.org')
                const data = await res.json()
                if (!data.online) throw new Error('mcsrvstat offline')
                setOnline(true)
                setPlayers(data.players?.online ?? 0)
            } catch {
                console.log('Fallback to Crafty')
                try {
                    const res = await fetch('https://crafty.hodgkraft.duckdns.org/api/v2/servers/status')
                    const data = await res.json()
                    const velocity = data.data.find(s => s.world_name === "Velocity Server")
                    setOnline(velocity?.running ?? false)
                    setPlayers(velocity?.online ?? 0)
                } catch {
                    setOnline(false)
                    setPlayers(0)
                }
            }
        }
        fetchStatus()
    }, [])

    return <>
        <section className={styles.heroCardContainer}>
            <div className={styles.heroCard}>
                <div className={styles.section1}>
                    <MinecraftInput defaultText="hodgkraft.duckdns.org" disabled={true} />
                    <MinecraftButton label="Copy" onClick={() => { }} />
                </div>
                <hr className={styles.divider} />
                <div className={styles.section2}>
                    <TagList>
                        <Tag name="Native Java Paper 1.21.11" backgroundColor='#276b16' icon={logos['papermc_logo.min.svg']} />
                        <Tag name="Java ViaVersion 1.7 - 26.2" backgroundColor='#4e4f63' icon={logos['viaversion.png']} />
                        <Tag name="Bedrock Geyser 1.21.30 - 26.23" backgroundColor='#1a455e' icon={logos['geyser-apple-touch-icon.png']}/>
                        <Tag name="Java Bedrock Crossplay" backgroundColor='#8b2727' icon={logos["link.png"]} />
                        <Tag name="Cracked Friendly" />
                        <Tag name="SMP" />
                        <Tag name="Creative" />
                        <Tag name="Moderation" />
                        <Tag name="Anti-Griefing" />
                        <Tag name="Authentication" />
                    </TagList>
                </div>
                <hr className={styles.divider} />
                <div className={styles.section3}>
                    <div className={styles.onlineStatus}>
                        <span className={styles.onlineStatusIndicator}>
                            <motion.span className={styles.onlineStatusCircle}
                                animate={
                                    online ? {
                                        scale: [0.8, 0.8],
                                        opacity: [1, 1],
                                        boxShadow: [
                                            '0 0 0 0px rgba(0, 187, 25, 0.7)',
                                            '0 0 0 8px rgba(0, 187, 25, 0)',
                                        ],
                                        backgroundColor: ['rgb(0, 187, 25)', 'rgb(0, 187, 25)']
                                    } : {
                                        scale: 0.8,
                                        opacity: 1,
                                        backgroundColor: '#35353588',
                                        boxShadow: '0 0 0 0px rgba(0,0,0,0)'
                                    }
                                }
                                transition={{ duration: 2, repeat: online ? Infinity : 0 }}
                            />
                        </span>
                        <span className={styles.onlineStatusText}>{online ? 'Online' : 'Offline'}</span>
                        <span className={styles.onlineStatusTextSub}>Server Status</span>
                    </div>
                    <div className={styles.playerCount}>
                        <span className={styles.playerCountNumber}>{online ? players : '-'}</span>
                        <span className={styles.playerCountText}>player{players != 1?'s':''}</span>
                        <span className={styles.playerCountTextSub}>online</span>
                    </div>
                    <div className={styles.region}>
                        <span className={styles.regionFlag}>🌏</span>
                        <span className={styles.regionText}>Singapore</span>
                        <span className={styles.regionTextSub}>Server Region</span>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default HeroCard