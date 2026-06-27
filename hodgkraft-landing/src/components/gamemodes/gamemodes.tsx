import styles from "./gamemodes.module.css"

import witherSkeletonIcon from "../../assets/gamemodes/Wither_Skeleton_Skull__288_29.png"
import grassBlockIcon from "../../assets/gamemodes/Grass_Block_JE7_BE6.png"
import swordIcon from "../../assets/gamemodes/Diamond_Sword_JE3_BE3.png"

function Gamemodes() {
    return (
        <div className={styles.gamemodesContainer} id="gamemodes">
            <div className={styles.gamemodes}>
                <p>Hodgkraft offers 3 fun gamemodes:</p>
                <div className={styles.gameSel}>
                    <div>
                        <div className={styles.scaleHover}>
                            <img src={swordIcon} alt="Diamond sword" />
                            <span className={styles.leadText}>Hodgkraft SMP (Survival Multiplayer)</span>
                            <span className={styles.subText}>Survive, explore, and build together.</span>
                        </div>
                    </div>
                    <div>
                        <div className={styles.scaleHover}>
                            <img src={grassBlockIcon} alt="Grass block" />
                            <span className={styles.leadText}>Hodgkraft Creatives</span>
                            <span className={styles.subText}>Build whatever your heart desires.</span>
                        </div>
                    </div>
                    <div>
                        <div className={styles.scaleHover}>
                            <img src={witherSkeletonIcon} alt="Wither Skeleton head" />
                            <span className={styles.leadText}>Hodgkraft Season 1 Archive</span>
                            <span className={styles.subText}>See the world where the server was born.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gamemodes