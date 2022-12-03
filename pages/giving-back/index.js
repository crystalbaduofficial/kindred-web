import Head from 'next/head'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/GivingBack.module.css"
import Footer from '../../src/Components/Footer'

export default function GivingBack() {
    return (
        <div >
            <Head>
                <title>Giving Back - Kindred</title>
                <meta name="description" content="Giving Back - Kindred" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.firstContainerGivingBack}>
                <div className={styles.firstContainerInner}>
                    <h2 data-aos="fade-right">Donations</h2>
                    <p data-aos="fade-right" style={{ maxWidth: 300, lineHeight: 1.8 }}>We believe in the power of generosity in all its forms <AiOutlineArrowRight /></p>
                </div>
            </div>
            <div className={styles.secondContainerGivingBack}>
                <div className={styles.firstContainerInner}>
                    <h2 data-aos="fade-right">Service Opportunities</h2>
                    <p data-aos="fade-right">Learn about service opportunites you can join</p>
                    <p data-aos="fade-right">Learn More <AiOutlineArrowRight /></p>
                </div>
            </div>
            <div className={styles.thirdContainerGivingBack}>
                <h2 data-aos="fade-right">Community Projects</h2>
                <div className={styles.containerContentThird}>
                    <div className={styles.innerCct}>

                    </div>
                    <div className={styles.innerCct}>

                    </div>
                    <div className={styles.innerCct}>

                    </div>
                </div>
                <p data-aos="fade-right">View More <AiOutlineArrowRight /></p>
            </div>
            <Footer />
            {/* <Footer /> */}
        </div>
    )
}
