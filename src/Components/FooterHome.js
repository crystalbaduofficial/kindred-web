import React from 'react'
import styles from "../../styles/HomeFooter.module.css"

function FooterHome() {
    return (
        <div className={styles.footerHome}>
            <div className={styles.containerFooterHome}>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>Shop and Learn</li>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                </div>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>Why Us?</li>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                </div>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>Account</li>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                </div>
            </div>
            <div className={styles.containerFooterHome}>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>Shop and Learn</li>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                </div>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>Why Us?</li>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                </div>
                <div className={styles.innerContainerFooterHome}>
                    <ul>
                        <li>Account</li>
                        <li>Point 1</li>
                        <li>Point 2</li>
                        <li>Point 3</li>
                    </ul>
                </div>
            </div>
            <p style={{ textAlign: "center", fontSize: 16, color: "#1d1d1f", margin: 0, marginTop: 30 }}>&copy;{new Date().getFullYear()} kindred.com. All rights reserved.</p>
        </div>
    )
}

export default FooterHome