import Head from 'next/head'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/Contact.module.css"
import Footer from '../../src/Components/Footer'
import { useState } from 'react'
import { send } from 'emailjs-com';

export default function Contact() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")


    const submitForm = () => {
        let sendToObject = { email: email, first_name: firstName, last_name: lastName, tel: phone }
        send(
            'service_umq9ady',
            'template_axo2dhc',
            sendToObject,
            'User ID'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

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
                    <h2 data-aos="fade-right">Get in Touch</h2>
                    <p data-aos="fade-right">Contact us by leaving a submission</p>
                </div>
            </div>
            <div className={styles.contentContact}>
                <h3>Contact Information</h3>
                <div className={styles.rowContact}>
                    <div className={styles.innerRowContact}>
                        <input type="text" placeholder="First Name *" value={firstName} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />
                    </div>
                    <div className={styles.innerRowContact}>
                        <input type="text" placeholder="Last Name *" value={lastName} onChange={(e) => {
                            setLastName(e.target.value)
                        }} />
                    </div>
                </div>
                <div className={styles.innerRowContact}>
                    <input type="email" placeholder="Email *" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </div>
                <div className={styles.rowContact}>
                    <div className={styles.innerRowContact}>
                        <input type="number" placeholder="Mobile Phone" value={phone} onChange={(e) => {
                            setPhone(e.target.value)
                        }} />
                    </div>
                </div>
            </div>
            <div className={styles.bottomContainerContact}>
                <p onClick={() => submitForm()}>Submit Request <AiOutlineArrowRight /></p>
            </div>
            {/* <Footer /> */}
        </div>
    )
}
