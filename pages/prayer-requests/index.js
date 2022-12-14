import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/PrayerRequests.module.css"
import placeholder from "../../assets/images/bg-image.jpg"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { useEffect, useState } from 'react'
import Footer from '../../src/Components/Footer'
import firebase from "../../src/Config/Firebase"
import Swal from 'sweetalert2'

export default function PrayerRequests() {

    const [description, setDescription] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobilePhone, setMobilePhone] = useState("")
    const [zipCode, setZipCode] = useState("")

    const submitRequest = () => {
        if (description && firstName && lastName && email && mobilePhone && zipCode) {
            let obj = {
                description,
                name: firstName + " " + lastName,
                email,
                phoneNumber: mobilePhone,
                zipCode,
            }
            let pushKey = firebase.database().ref("prayer-requests").push().key
            obj.pushKey = pushKey
            firebase.database().ref("prayer-requests/" + pushKey).set(obj).then(() => {
                Swal.fire(
                    'Cool',
                    'Thank you for entrusting us with this request. We will follow up with you shortly.',
                    'success'
                )
                setDescription("")
                setMobilePhone("")
                setZipCode("")
                setEmail("")
                setFirstName("")
                setLastName("")
            })
        }
    }

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
                        <textarea placeholder="Please let us know how can we pray for you." value={description} onChange={(e) => {
                            setDescription(e.target.value)
                        }}></textarea>
                    </div>
                    <div className={styles.contentPreq}>
                        <div className={styles.rowPreq}>
                            <div className={styles.innerRowPreq}>
                                <input type="text" placeholder="First Name *" value={firstName} onChange={(e) => {
                                    setFirstName(e.target.value)
                                }} />
                            </div>
                            <div className={styles.innerRowPreq}>
                                <input type="text" placeholder="Last Name *" value={lastName} onChange={(e) => {
                                    setLastName(e.target.value)
                                }} />
                            </div>
                        </div>
                        <div className={styles.innerRowPreq}>
                            <input type="email" placeholder="Email *" value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div className={styles.rowPreq}>
                            <div className={styles.innerRowPreq}>
                                <input type="number" placeholder="Mobile Phone" value={mobilePhone} onChange={(e) => {
                                    setMobilePhone(e.target.value)
                                }} />
                            </div>
                        </div>
                        <div className={styles.zipCodeMainTop}>
                            <div className={styles.innerRowPreq}>
                                <label>Zip Code *</label>
                                <input type="text" placeholder="Zip Code" value={zipCode} onChange={(e) => {
                                    setZipCode(e.target.value)
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomContainerPreq}>
                        <p style={{ cursor: "pointer" }} onClick={() => submitRequest()}> Submit Request <AiOutlineArrowRight /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
