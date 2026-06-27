import styles from "./footer.module.css"

function Footer () {
    return (
    <div className={styles.footer}>
        <div className={styles.identity}>
            <h2>Hodgkraft</h2>
            
            <p>© 2026 Hodgkraft. All rights reserved.</p>
            <p>Minecraft is a trademark of Mojang AB. Hodgkraft is not affiliated with or endorsed by Mojang.</p>
            <p>Server and landing page made by <a href="https://f1n3.xyz">gamer0kayf1n3</a> and co-hosted with <a href="https://github.com/BermudaVI">TheSnobol</a> with ♥</p>
        </div>
        <div className={styles.links}>

        </div>
    </div>
    )
}

export default Footer