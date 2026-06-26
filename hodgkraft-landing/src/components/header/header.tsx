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
                        <li><a href="#home">Home</a></li>
                        <li><a href="#gamemodes">Gamemodes</a></li>
                        <li><a href="#discord">Discord</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Header
