import React from 'react'
import styles from "../../styles/HomeFooter.module.css"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"

function FooterHome() {
    return (
        <div className={styles.footerHome}>
            <div className={styles.containerFooterHome}>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>CONTACT US</li>
                        <li>8324 Allison Ave, La Mesa Ca 91942</li>
                        <li><a href="tel:(619) 558-5150">(619) 558-5150</a></li>
                    </ul>
                </div>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>INFO</li>
                        <li>Worship with us, Sunday</li>
                        <li>10am in Person and YouTube</li>
                    </ul>
                </div>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>ABOUT</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className={styles.quoteText}>
                <h4>Quote of the Week:</h4>
                <p>“I’m convinced that nothing can separate us from God’s love in Christ Jesus our Lord: not death or life, not angels or rulers, not present things or future things, not powers or height or depth, or any other thing that is created.” Romans 8:38-39 CEB</p>
            </div>
            <div className={styles.iconsFooter}>
                <div className={styles.iconsFooterInner}>
                    <FaFacebookF />
                </div>
                <div className={styles.iconsFooterInner}>
                    <FiInstagram />
                </div>
            </div>
            <p className={styles.lastParaText}>&copy;{new Date().getFullYear()} kindred.com. All rights reserved.</p>
        </div >
    )
}

export default FooterHome