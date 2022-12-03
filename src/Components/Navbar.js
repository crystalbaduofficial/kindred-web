import React, { Component } from 'react'
import styles from "../../styles/Navbar.module.css"
import Image from 'next/image'
import logo from "../../assets/images/kindred-logo-nav.png"
import { AiOutlineSearch } from "react-icons/ai"

export class Navbar extends Component {
    render() {
        return (
            <div className={styles.navbarMain}>
                <div className={styles.containerNavbar}>
                    <Image src={logo} />
                    <ul>
                        <li>Take Me to Church</li>
                        <li>About Kindred</li>
                        <li>How can I Get Involved</li>
                        <li>Giving Back</li>
                        <li>Prayer Requests</li>
                        <li>Contact Us</li>
                        <li>
                            <AiOutlineSearch />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar