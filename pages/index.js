import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page - Kindred</title>
        <meta name="description" content="Kindred" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.homepagemain}>
        <h1>KINDRED</h1>
      </div>
    </div>
  )
}
