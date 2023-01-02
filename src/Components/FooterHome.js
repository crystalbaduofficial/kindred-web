import React from 'react'
import styles from "../../styles/HomeFooter.module.css"

function FooterHome() {
    return (
        <div className={styles.footerHome}>
            <div className={styles.containerFooterHome}>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>8324 Allison Ave, La Mesa Ca 91942</li>
                        <li><a href="tel:(619) 558-5150">(619) 558-5150</a></li>
                    </ul>
                </div>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>Worship with us, Sunday</li>
                        <li>10am in Person and YouTube</li>
                    </ul>
                </div>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <p className={styles.lastParaText}>&copy;{new Date().getFullYear()} kindred.com. All rights reserved.</p>
        </div >
    )
}

export default FooterHome