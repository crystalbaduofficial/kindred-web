import Head from 'next/head'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/Services.module.css"

export default function Services() {
    return (
        <div >
            <Head>
                <title>Services - Kindred</title>
                <meta name="description" content="Services of Kindred" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.mainContServices}>
                <div className={styles.innerContainerServices}>
                    <div className={styles.contentContainer}>
                        <video src={require('../../assets/videos/services-first-video.mp4')} playsInline autoPlay muted loop></video>
                        <h3>Connect Authentically</h3>
                        <p>We believe that relationships are a core part of God&apos;s work, it&apos;s from these connections that we carry out all of our core values</p>
                        {/* <p>We believe strongly in the power of relationships. It is through relationships that God works in people&apos;s lives. And it is through relationships that we are able to carry out all these other core values</p> */}
                    </div>
                    <div className={styles.contentContainer}>
                        <video src={require('../../assets/videos/services-second-video.mp4')} playsInline autoPlay muted loop></video>
                        <h3>Harbor Safety</h3>
                        <p>Many feel hurt, judged or unsafe in traditional churches, we strive to create an environment where all people feel safe</p>
                        {/* <p>Often times people don&apos;t feel very safe in traditional churches. They often feel judged from the moment they walk in the door. So we are going to fight to create an environment where all people feel safe</p> */}
                    </div>
                    <div className={styles.contentContainer}>
                        <video src={require('../../assets/videos/services-third-video.mp4')} playsInline autoPlay muted loop></video>
                        <h3>Share Boldly</h3>
                        <p>We find tangible ways to share the gospel boldly and lovingly in our everyday lives, not just on Sunday mornings</p>
                        {/* <p>We also believe in finding tangible ways to share the gospel in our everyday lives, and not just on Sunday mornings. But we want to do it in bold and loving ways</p> */}
                    </div>
                    <div className={styles.contentContainer}>
                        <video src={require('../../assets/videos/services-fourth-video.mp4')} playsInline autoPlay muted loop></video>
                        <h3>Serve Selflessly</h3>
                        <p>We believe in caring for others, we live out our faith by serving our community</p>
                        {/* <p>As a church, we believe in being the church. We want to be a church that actively lives out our faith by serving the community</p> */}
                    </div>
                    <div className={styles.contentContainer}>
                        <video src={require('../../assets/videos/services-fifth-video.mp4')} playsInline autoPlay muted loop></video>
                        <h3>Love Deeply</h3>
                        <p>We proactively love people for who they are and where they are no matter what</p>
                        {/* <p>We will proactively love people for who they are, and no matter what kind of life they live</p> */}
                    </div>
                    {/* <div className={styles.contentContainer}>
                        <video src={require('../../assets/videos/services-sixth-video.mp4')} playsInline autoPlay muted loop></video>
                        <h3>Share Boldly</h3>
                        <p>We also believe in finding tangible ways to share the gospel in our everyday lives, and not just on Sunday mornings. But we want to do it in bold and loving ways</p>
                    </div>
                    <div className={styles.contentContainer}>
                        <video src={require('../../assets/videos/services-seventh-video.mp4')} playsInline autoPlay muted loop></video>
                        <h3>Love Deeply</h3>
                        <p>We will proactively love people for who they are, and no matter what kind of life they live</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
