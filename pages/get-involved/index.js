import Head from 'next/head'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/GetInvolved.module.css"
import Footer from '../../src/Components/Footer'
import { useEffect, useState } from 'react'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"

export default function GetInvolved() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentSlideSecond, setCurrentSlideSecond] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            let allSlides = document.querySelectorAll(".carouselGetInvolvedFirst .carousel-slide")
            if (currentSlide < allSlides.length - 1) {
                setCurrentSlide(currentSlide + 1)
            } else {
                setCurrentSlide(0)
            }
        }, 6000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <div >
            <Head>
                <title>Get Involved - Kindred</title>
                <meta name="description" content="Get Involved in Kindred" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={`carousel-main-own carouselGetInvolvedFirst`}>
                <div className={`carousel-slide ${currentSlide === 0 ? "active" : ""}`}>
                    <div className={styles.slideGetInvolvedFirst}>
                        <h2>Event Calendar</h2>
                        <p>View Upcoming Events <AiOutlineArrowRight /> </p>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlide === 1 ? "active" : ""}`}>
                    <div className={styles.slideGetInvolvedSecond}>
                        <div className={styles.containerInnerOverlay}>
                            <h2>Service Projects</h2>
                            <p style={{ marginBottom: 10 }}>Explore nearby in-person worship opportunities</p>
                            <p>Learn More <AiOutlineArrowRight /> </p>
                        </div>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlide === 2 ? "active" : ""}`}>
                    <div className={styles.slideGetInvolvedThird}>
                        <div className={styles.containerInnerOverlay}>
                            <h2>Small Groups</h2>
                            <p>Discover small groups to meet individuals like you</p>
                            <p>Watch Now <AiOutlineArrowRight /> </p>
                        </div>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlide === 3 ? "active" : ""}`}>
                    <div className={styles.slideGetInvolvedFourth}>
                        <div className={styles.containerInnerOverlay}>
                            <h2>Interest Parties</h2>
                            <p>Our most recent sermons with messages for you</p>
                            <p>Watch Now <AiOutlineArrowRight /> </p>
                        </div>
                    </div>
                </div>
                <BsChevronRight className='slider-right-icon' onClick={() => {
                    let allSlides = document.querySelectorAll(".carouselGetInvolvedFirst .carousel-slide")
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
            <div className={`carousel-main-own carouselGetInvolvedSecond`}>
                <div className={`carousel-slide ${currentSlideSecond === 0 ? "active" : ""}`}>
                    <div className={styles.slideGetInvolvedSecondFirst}>
                        <div className={styles.bottomLeftContainerWhole}>
                            <h2>Youtube Channel</h2>
                            <p>
                                Kindred believes a strong online <br />presence is crucial in sharing <br />the good news of Jesus Christ.<br />
                                We have a variety of <br />entertaining faith-based videos <br />meant for spiritual growth and <br />development, all meant to <br />celebrate God.
                            </p>
                            <p>Watch Now <AiOutlineArrowRight /></p>
                        </div>
                    </div>
                </div>
                <div className={`carousel-slide ${currentSlideSecond === 1 ? "active" : ""}`}>
                    <div className={styles.slideGetInvolvedSecondSec}>
                        <div className={styles.containerInnerOverlay}>
                            <h2>Kindred Podcasts</h2>
                            <p style={{ marginBottom: 10 }}>Tune in live to podcasts about your favorite topics</p>
                            <p>Listen Now <AiOutlineArrowRight /> </p>
                        </div>
                    </div>
                </div>
                <BsChevronRight className='slider-right-icon' onClick={() => {
                    let allSlides = document.querySelectorAll(".carouselGetInvolvedSecond .carousel-slide")
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
