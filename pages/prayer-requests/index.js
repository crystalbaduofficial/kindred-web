import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/PrayerRequests.module.css"
import placeholder from "../../assets/images/bg-image.jpg"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { useEffect, useState } from 'react'
import Footer from '../../src/Components/Footer'

export default function PrayerRequests() {
    return (
        <div style={{ backgroundColor: "#FAFAFA" }}>
            <Head>
                <title>Prayer Requests - Kindred</title>
                <meta name="description" content="Prayer Requests - Kindred" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.containerPreqMain}>
                <div className={styles.imgContPreqMain}>

                </div>
                <div className={styles.contentContPreqMain}>
                    <h3>Prayer Requests</h3>
                    <p className={styles.prmparafirst}>Need help? Write your request below to receive a prayer from Kindred.</p>
                    <div className={styles.innerRowPreq}>
                        <textarea placeholder="Please let us know how can we pray for you."></textarea>
                    </div>
                    <div className={styles.contentPreq}>
                        <div className={styles.rowPreq}>
                            <div className={styles.innerRowPreq}>
                                <input type="text" placeholder="First Name *" />
                            </div>
                            <div className={styles.innerRowPreq}>
                                <input type="text" placeholder="Last Name *" />
                            </div>
                        </div>
                        <div className={styles.innerRowPreq}>
                            <input type="email" placeholder="Email *" />
                        </div>
                        <div className={styles.rowPreq}>
                            <div className={styles.innerRowPreq}>
                                <input type="number" placeholder="Mobile Phone" />
                            </div>
                        </div>
                        <div className={styles.zipCodeMainTop}>
                            <div className={styles.innerRowPreq}>
                                <label>Zip Code *</label>
                                <input type="number" placeholder="Mobile Phone" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomContainerPreq}>
                        <p>Submit Request <AiOutlineArrowRight /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
