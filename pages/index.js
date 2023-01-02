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
        <h1>Welcome to kindred</h1>
        <p>Some demo text for kindred as a paragraph that we change earlier to make it more cool also</p>
        <button>Get started</button>
      </div>
      <FooterHome />
    </div>
  )
}
