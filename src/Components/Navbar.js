import React, { Component } from 'react'
import styles from "../../styles/Navbar.module.css"
import Image from 'next/image'
import logo from "../../assets/images/kindred-logo-nav.png"
import { AiOutlineSearch } from "react-icons/ai"
import Link from 'next/link'

export class Navbar extends Component {
    render() {
        return (
            <div className={styles.navbarMain}>
                <div className={styles.containerNavbar}>
                    <Image src={logo} />
                    <ul>
                        <li><Link href="/take-me-to-church">Take Me to Church</Link></li>
                        <li><Link href="/about">About Kindred</Link></li>
                        <li><Link href="/get-involved">How can I Get Involved</Link></li>
                        <li><Link href="/giving-back">Giving Back</Link></li>
                        <li><Link href="/prayer-requests">Prayer Requests</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
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