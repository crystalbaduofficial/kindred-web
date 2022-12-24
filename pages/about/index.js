import Head from 'next/head'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/About.module.css"
import Footer from '../../src/Components/Footer'
import { useEffect, useState } from 'react'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import Link from 'next/link'

// import firstVideo from "../../assets/videos/about-first-video.mp4"
// import secondVideo from "../../assets/videos/about-second-video.mp4"
// import thirdVideo from "../../assets/videos/about-third-video.mp4"
// import fourthVideo from "../../assets/videos/about-fourth-video.mp4"

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentSlideSecond, setCurrentSlideSecond] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         let allSlides = document.querySelectorAll(".carouselAbout .carousel-slide")
    //         if (currentSlide < allSlides.length - 1) {
    //             setCurrentSlide(currentSlide + 1)
    //         } else {
    //             setCurrentSlide(0)
    //         }
    //     }, 6000);
    //     return () => clearInterval(interval);
    // }, [currentSlide]);

    useEffect(() => {
        const interval = setInterval(() => {
            let allSlides = document.querySelectorAll(".carouselAboutSecond .carousel-slide")
            if (currentSlideSecond < allSlides.length - 1) {
                setCurrentSlideSecond(currentSlideSecond + 1)
            } else {
                setCurrentSlideSecond(0)
            }
        }, 6000);
        return () => clearInterval(interval);
    }, [currentSlideSecond]);

    return (
        <div >
            <Head>
                <title>About - Kindred</title>
                <meta name="description" content="About Kindred" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.bannerAboutImage}>
                <div className={styles.firstContainerInner}>
                    <h2 data-aos="fade-right">Our Story</h2>
                    <p data-aos="fade-right" style={{ maxWidth: 390, lineHeight: 1.3 }}>Over 80 years ago, the El Cajon Blvd Church of Christ saw a desperate need to plant churches all over San Diego, and in just over 12 years they have planted 11 churches and solidified a dream.</p>
                    <p data-aos="fade-right"><Link href="/our-story">Read More <AiOutlineArrowRight /> </Link></p>
                </div>
            </div>
            <div className={`carousel-main-own carouselAbout`}>
                <div className={`carousel-slide ${currentSlide === 0 ? "active" : ""}`}>
                    <div className={styles.slideAboutFirst}>
                        <h2>Biblical Beliefs</h2>
                        <div className={styles.containerAboutfirst}>
                            <div className={styles.containerAboutfirstInner} data-aos="fade-right">
                                <video src={require('../../assets/videos/about-first-video.mp4')} playsInline autoPlay muted loop></video>
                                <h3>God Will Give You Rest</h3>
                                <p>If you are tired from carrying heavy burdens, come to me and I will give you rest. Take the yoke I give you. Put it on your shoulders and learn from me. I am gentle and humble, and you will find rest. This yoke is easy to bear, and this burden is light.</p>
                                <p>Matthew 11:28-30</p>
                            </div>
                            <div className={styles.containerAboutfirstInner} data-aos="fade-right">
                                <video src={require('../../assets/videos/about-second-video.mp4')} playsInline autoPlay muted loop></video>
                                <h3>Come As You Are</h3>
                                <p>If you are tired from carrying heavy burdens, come to me and I will give you rest. Take the yoke I give you. Put it on your shoulders and learn from me. I am gentle and humble, and you will find rest. This yoke is easy to bear, and this burden is light.</p>
                                <p>Ephesians 2:19</p>
                            </div>
                            <div className={styles.containerAboutfirstInner} data-aos="fade-right">
                                <video src={require('../../assets/videos/about-third-video.mp4')} playsInline autoPlay muted loop></video>
                                <h3>Leave God and Others Unconditionally</h3>
                                <p>&quot;And you must love the Lord your God with all your heart, all your soul, all your mind, and all your strength. &apos;The second is equally important: &apos;Love your neighbor as yourself.&apos; No other commandment is greater than these.&quot;</p>
                                <p>Mark 12:30-31</p>
                            </div>
                            <div className={styles.containerAboutfirstInner} data-aos="fade-right">
                                <video src={require('../../assets/videos/about-fourth-video.mp4')} playsInline autoPlay muted loop></video>
                                <h3>God Desires to Be Known</h3>
                                <p>&quot;I will give them a heart to know that I am the Lord, and they shall be my people and I will be their God, for they shall return to me with their whole heart.&quot;</p>
                                <p>Jeremiah 24:7</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlide === 1 ? "active" : ""}`}>
                    <div className={styles.slideAboutSecond}>
                        <p>
                            It is with these <font style={{ color: "white" }}>Basic Biblical Beliefs</font> in mind that we have felt the calling to reach out to those who are <font style={{ color: "white" }}>lost and alone</font>. In the Bible, there is a story about a prodigal son, who took his inheritance, while his father was still alive, and went out into the world to discover himself. This young man, walked away from his father, family and everything he knew because he <font style={{ color: "white" }}>wanted something different</font>. But in doing this, he <font style={{ color: "white" }}>walked into a life of emptiness</font>. Now for a long time he was trying to find a place to fit in. He was trying to find a place where he would be accepted. He was trying to find something different, but <font style={{ color: "white" }}>all he found was emptiness</font>. It was in this moment where the Spirit of God stirred in him. It was in this moment where he began <font style={{ color: "white" }}>searching for a way back home</font>. He didn’t know what that would look like. But as soon as he was in sight, <font style={{ color: "white" }}>his father went running to him</font>. These are the people we feel uniquely called to reach. We believe God has called us to reach out to those who have <font style={{ color: "white" }}>no connection</font> with God. This may mean they are unchurched, or maybe they have <font style={{ color: "white" }}>simply walked away at some point</font>, but these are the <font style={{ color: "white" }}>people we feel called to reach</font>
                        </p>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlide === 2 ? "active" : ""}`}>
                    <div className={styles.mainTeamContainer}>
                        <div className={styles.innerTeamContainer}>
                            <div className={styles.teamMemberBgImage}>

                            </div>
                            <div className={styles.contentTeamMember}>
                                <h3>Member Name</h3>
                                <p>Some additional description regarding this team member Some additional description regarding this team member Some additional description regarding this team member Some additional description regarding this team member</p>
                            </div>
                        </div>
                        <div className={styles.innerTeamContainer}>
                            <div className={styles.teamMemberBgImage}>

                            </div>
                            <div className={styles.contentTeamMember}>
                                <h3>Member Name</h3>
                                <p>Some additional description regarding this team member Some additional description regarding this team member Some additional description regarding this team member Some additional description regarding this team member</p>
                            </div>
                        </div>
                        <div className={styles.innerTeamContainer}>
                            <div className={styles.teamMemberBgImage}>

                            </div>
                            <div className={styles.contentTeamMember}>
                                <h3>Member Name</h3>
                                <p>Some additional description regarding this team member Some additional description regarding this team member Some additional description regarding this team member Some additional description regarding this team member</p>
                            </div>
                        </div>
                    </div>
                </div>
                <BsChevronRight className='slider-right-icon' onClick={() => {
                    let allSlides = document.querySelectorAll(".carouselAbout .carousel-slide")
                    if (currentSlide < allSlides.length - 1) {
                        setCurrentSlide(currentSlide + 1)
                    }
                }} />
                <BsChevronLeft className='slider-left-icon' onClick={() => {
                    if (currentSlide > 0) {
                        setCurrentSlide(currentSlide - 1)
                    }
                }} />
            </div>
            <div className={`carousel-main-own carouselAboutSecond`}>
                <div className={`carousel-slide ${currentSlideSecond === 0 ? "active" : ""}`}>
                    <div className={styles.slideAboutSecondFirst}>
                        <div className={styles.firstContainerInner}>
                            <h2 data-aos="fade-right">The Kindred Vision</h2>
                            <p data-aos="fade-right">Kindred is where people come to know and be known</p>
                        </div>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlideSecond === 1 ? "active" : ""}`}>
                    <div className={styles.slideAboutSecondSecond}>
                        <div className={styles.firstContainerInner}>
                            <h2 data-aos="fade-right">The Kindred Mission</h2>
                            <p data-aos="fade-right">Our Mission is to create a loving community where alll  feel welcomed, accepted, and ultimately come to know God and other people</p>
                        </div>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlideSecond === 2 ? "active" : ""}`}>
                    <div className={styles.slideAboutSecondThird}>
                        <div className={styles.firstContainerInner}>
                            <h2 data-aos="fade-right">Core Values</h2>
                            <p data-aos="fade-right">What are the core values we live by? Learn now.</p>
                            <p data-aos="fade-right">Learn More  <AiOutlineArrowRight /></p>
                        </div>
                    </div>
                </div>
                <BsChevronRight className='slider-right-icon' onClick={() => {
                    let allSlides = document.querySelectorAll(".carouselAboutSecond .carousel-slide")
                    if (currentSlideSecond < allSlides.length - 1) {
                        setCurrentSlideSecond(currentSlideSecond + 1)
                    }
                }} />
                <BsChevronLeft className='slider-left-icon' onClick={() => {
                    if (currentSlideSecond > 0) {
                        setCurrentSlideSecond(currentSlideSecond - 1)
                    }
                }} />
            </div>
            <Footer />
        </div>
    )
}
