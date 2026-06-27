import styles from "./footer.module.css"
import { config } from "../../config";
function Footer() {
    return (
        <div className={styles.footerParent}>
            <div className={styles.footer}>
                <div className={styles.identity}>
                    <h2>Hodgkraft</h2>

                    <p>© 2026 Hodgkraft. All rights reserved.</p>
                    <p>Minecraft is a trademark of Mojang AB. Hodgkraft is not affiliated with or endorsed by Mojang.</p>
                    <p>
                        Website and server management by <a href="https://f1n3.xyz">gamer0kayf1n3</a>.
                        Server co-hosted with <a href="https://github.com/BermudaVI">TheSnobol</a>.
                        Made with ♥.
                    </p>
                </div>
                <div className={styles.links}>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#gamemodes">Gamemodes</a></li>
                        <li><a href={config.discord}>Discord</a></li>
                        <li><a href={config.status}>Server Status</a></li>
                        <li><a href={config.admin}>Administrator</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer