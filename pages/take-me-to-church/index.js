import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/Tmtc.module.css"
import bannerVideo from "../../assets/videos/bannervideo.mp4"
import placeholder from "../../assets/images/bg-image.jpg"
import slideFirstPic from "../../assets/images/third-section-tmtcfirst.jpg"
import slideSecondPic from "../../assets/images/third-slider-second-tmtc.jpg"
import slideThirdPic from "../../assets/images/third-slider-third-tmtc.jpg"
import slideFourthPic from "../../assets/images/third-slider-fourth-tmtc.jpg"
import slideSeFirstPic from "../../assets/images/youtube-pic-gi.jpg"
import slideSeSecPic from "../../assets/images/second-section-tmtc.jpg"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { useEffect, useState } from 'react'
import Footer from '../../src/Components/Footer'

export default function Home() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentSlideSecond, setCurrentSlideSecond] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            let allSlides = document.querySelectorAll(".carouselTmtc .carousel-slide")
            if (currentSlide < allSlides.length - 1) {
                setCurrentSlide(currentSlide + 1)
            } else {
                setCurrentSlide(0)
            }
        }, 6000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    useEffect(() => {
        const interval = setInterval(() => {
            let allSlides = document.querySelectorAll(".carouselTmtcSecond .carousel-slide")
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
                <title>Take me to Church</title>
                <meta name="description" content="Take me to Church - Kindred" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.firstContainer}>
                <video src={bannerVideo} autoPlay muted loop></video>
                <div className={styles.firstContainerInner}>
                    <h2>Join Us For Live Worship</h2>
                    <p style={{ cursor: "pointer" }} onClick={() => {
                        window.open("https://instagram.com/ydb_ministry?igshid=NTdlMDg3MTY=", "_blank")
                    }}>Join us live on Social Media <AiOutlineArrowRight /></p>
                </div>
            </div>

            <div className={styles.secondContainer}>
                <div className={styles.firstContainerInner}>
                    <h2 data-aos="fade-right"
                        data-aos-duration="500">Recent Sermons</h2>
                    <p data-aos="fade-right"
                        data-aos-duration="500">Our most recent sermons with messages for you</p>
                    <p data-aos="fade-right"
                        data-aos-duration="500">Watch Now <AiOutlineArrowRight /></p>
                </div>
            </div>

            {/* <div className="carousel-main-own carouselTmtcMain">
                <div className={`carousel-slide ${currentSlideMain === 0 ? "active" : ""}`}>
                    <div className={styles.secondContainer}>
                        <div className={styles.firstContainerInner}>
                            <h2 data-aos="fade-right"
                                data-aos-duration="500">Recent Sermons</h2>
                            <p data-aos="fade-right"
                                data-aos-duration="500">Our most recent sermons with messages for you</p>
                            <p data-aos="fade-right"
                                data-aos-duration="500">Watch Now <AiOutlineArrowRight /></p>
                        </div>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlideMain === 1 ? "active" : ""}`}>
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
                    let allSlides = document.querySelectorAll(".carouselTmtcMain .carousel-slide")
                    if (currentSlideMain < allSlides.length - 1) {
                        setCurrentSlideMain(currentSlideMain + 1)
                    }
                }} />
                <BsChevronLeft className='slider-left-icon' onClick={() => {
                    if (currentSlideMain > 0) {
                        setCurrentSlideMain(currentSlideMain - 1)
                    }
                }} />
            </div> */}
            <div className="carousel-main-own carouselTmtc">
                <div className={`carousel-slide ${currentSlide === 0 ? "active" : ""}`} style={{ backgroundImage: `url("${slideFirstPic.src}")` }}>
                    <div className={styles.contentTmTcFirst}>
                        <h2>Sermon Series</h2>
                        <p>Watch Now <AiOutlineArrowRight /></p>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlide === 1 ? "active" : ""}`} style={{ backgroundImage: `url("${slideSecondPic.src}")` }}>
                    <div className={styles.bottomLeftContainer}>
                        <h2>In-Person Worship</h2>
                        <p>Gather with us for worship on Wednesday’s <br /> (7PM) and Sunday’s (10AM)</p>
                        <p>Visit our Calendar <AiOutlineArrowRight /></p>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlide === 2 ? "active" : ""}`} style={{ backgroundImage: `url("${slideThirdPic.src}")` }}>
                    <div className={styles.bottomLeftContainer}>
                        <h2>Small Groups</h2>
                        <p>Small groups are vital to the health and well-<br />being of Kindred Church, and to your own<br />personal spiritual growth.</p>
                        <p>Get Involved <AiOutlineArrowRight /></p>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlide === 3 ? "active" : ""}`} style={{ backgroundImage: `url("${slideFourthPic.src}")` }}>
                    <div className={styles.bottomLeftContainer}>
                        <h2>Praise & Worship</h2>
                        <p>At Kindred Church we are passionate about <br />worship. Here are some of our favorite songs.</p>
                        <p>View <AiOutlineArrowRight /></p>
                    </div>
                </div>
                <BsChevronRight className='slider-right-icon' onClick={() => {
                    let allSlides = document.querySelectorAll(".carouselTmtc .carousel-slide")
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
            <div className={styles.fourthContainer}>
                <h2>Praise and Worship Videos</h2>
                <div className={styles.containerFourthTmtc}>
                    <div className={styles.innerContainerFtmtc}>
                        <div className={styles.videoTitleMain}>
                            <p>Video 1</p>
                        </div>
                    </div>
                    <div className={styles.innerContainerFtmtc}>

                    </div>
                    <div className={styles.innerContainerFtmtc}>

                    </div>
                    <div className={styles.innerContainerFtmtc}>

                    </div>
                    <div className={styles.innerContainerFtmtc}>

                    </div>
                    <div className={styles.innerContainerFtmtc}>

                    </div>
                </div>
            </div>
            <div className="carousel-main-own carouselTmtcSecond">
                <div className={`carousel-slide ${currentSlideSecond === 0 ? "active" : ""}`} style={{ backgroundImage: `url("${slideSeFirstPic.src}")` }}>
                    <div className={styles.bottomLeftContainerWhole}>
                        <h2>Youtube Channel</h2>
                        <p>
                            Kindred believes a strong online <br />presence is crucial in sharing <br />the good news of Jesus Christ.<br />
                            We have a variety of <br />entertaining faith-based videos <br />meant for spiritual growth and <br />development, all meant to <br />celebrate God.
                        </p>
                        <p>Watch Now <AiOutlineArrowRight /></p>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlideSecond === 1 ? "active" : ""}`} style={{ backgroundImage: `url("${slideSeSecPic.src}")` }}>
                    <div className={styles.bottomLeftContainerWhole}>
                        <h2>Kindred Podcasts</h2>
                        <p>
                            Reel Parables is a weekly podcast that <br />looks at relatively family friendly movies <br />with the goal of finding spiritual <br />elements. In other words, we will use <br />popular movies as modern day parables <br />to communicate timeless truths about <br />God, faith and what it means to be a <br />follower of Christ.
                        </p>
                        <p>Listen Now <AiOutlineArrowRight /></p>
                    </div>
                </div>
                <BsChevronRight className='slider-right-icon' onClick={() => {
                    let allSlides = document.querySelectorAll(".carouselTmtcSecond .carousel-slide")
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
