import Head from 'next/head'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/Contact.module.css"
import Footer from '../../src/Components/Footer'

export default function Contact() {
    return (
        <div >
            <Head>
                <title>Contact - Kindred</title>
                <meta name="description" content="Contact Kindred" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.contactSectionFirst}>
                <div className={styles.sectionFirstInner}>
                    <h2 data-aos="fade-right" data-aos-duration="500">Get in Touch</h2>
                    <p data-aos="fade-right" data-aos-duration="500">Contact us by leaving a submission</p>
                </div>
            </div>
            <div className={styles.contentContact}>
                <h3>Contact Information</h3>
                <div className={styles.rowContact}>
                    <div className={styles.innerRowContact}>
                        <input type="text" placeholder="First Name *" />
                    </div>
                    <div className={styles.innerRowContact}>
                        <input type="text" placeholder="Last Name *" />
                    </div>
                </div>
                <div className={styles.innerRowContact}>
                    <input type="email" placeholder="Email *" />
                </div>
                <div className={styles.rowContact}>
                    <div className={styles.innerRowContact}>
                        <input type="number" placeholder="Mobile Phone" />
                    </div>
                </div>
            </div>
            <div className={styles.bottomContainerContact}>
                <p>Submit Request <AiOutlineArrowRight /></p>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
