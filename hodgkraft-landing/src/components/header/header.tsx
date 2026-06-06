import { useState, useEffect } from "react"
import logo from '../../assets/images/logo.png';

import styles from './header.module.css'

function Header() {

    return <>
        <nav className={styles.navFullContainer}>
            <div className={styles.navContainer}>
                <div className={styles.icon}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={styles.navLinks}>
                    <ul>
                        <li>Home</li>
                        <li>Gamemodes</li>
                        <li>Discord</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Header
