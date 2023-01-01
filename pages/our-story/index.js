import Head from 'next/head'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/Story.module.css"
import logo from "../../assets/images/kindred-story-logo.png"
import Image from 'next/image'

export default function OurStory() {
    return (
        <div >
            <Head>
                <title>Services - Kindred</title>
                <meta name="description" content="Services of Kindred" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.mainContStory}>
                <div className={styles.innerContainerStory}>
                    <Image src={logo} style={{ maxWidth: 450, maxHeight: 300, marginRight: 70 }} alt="our-story" />
                    <div>
                        <h2>Our Story</h2>
                        <p>
                            Over 80 years ago, the El Cajon Blvd Church of Christ saw a desperate need to plant
                            churches all over San Diego, and in just over 12 years they planted 11 churches. Some
                            of those church plants, planted other churches, because they also saw the same
                            incredible need. The La Mesa Church of Christ was one of those church plants. But like
                            many congregations, over time, the urgency in sharing the good news of Jesus Christ
                            was over shadowed by maintenance; maintaining numbers, maintaining buildings, and
                            maintaining member needs and relationships. Now, to some degree, none of these
                            things are inherently bad. But they distract us from what is meant to be our main focus.
                            They distract us from taking the gospel of Jesus Christ to a world that is desperately
                            searching; searching for meaning . . . searching for a place to belong . . .
                            and ultimately, searching hope.
                            <br />
                            <br />
                            At kindred we are seeking to change this. As a people, we want to reach out to all those who do not know Jesus in our community.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
