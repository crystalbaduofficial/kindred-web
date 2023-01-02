import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../src/Components/Navbar'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import styles from '../styles/Home.module.css'
import FooterHome from '../src/Components/FooterHome'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Home Page - Kindred</title>
        <meta name="description" content="Kindred" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className={styles.homepagemain}>
        <div className={styles.opacityHome}></div>
        <h1>Welcome to Kindred</h1>
        <p>Official website of Kindred Church. Find messages from Christ to uplift your soul and invite the Spirit.</p>
        <button>Get started</button>
      </div>
      <FooterHome />
    </div>
  )
}
