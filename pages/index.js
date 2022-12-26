import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Navbar from '../src/Components/Navbar'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import styles from '../styles/Home.module.css'
import FooterHome from '../src/Components/FooterHome'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div>
      <Head>
        <title>Home Page - Kindred</title>
        <meta name="description" content="Kindred" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className={`carousel-main-own carouselTmtcSecond`}>
        <div className={`carousel-slide ${currentSlide === 0 ? "active" : ""}`}>
          
        </div>
        <div className={`carousel-slide ${currentSlide === 1 ? "active" : ""}`}>
          
        </div>
        <BsChevronRight className='slider-right-icon' onClick={() => {
          let allSlides = document.querySelectorAll(".carouselTmtcSecond .carousel-slide")
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
      <FooterHome />
      {/* <div className={styles.homepagemain}>
        <Navbar />
        <h1>KINDRED</h1>
      </div> */}
    </div>
  )
}
