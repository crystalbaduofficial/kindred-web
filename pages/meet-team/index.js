import Head from 'next/head'
import Navbar from '../../src/Components/Navbar'
import styles from "../../styles/MeetTeam.module.css"
import teamMemFirst from "../../assets/images/team1.jpg"
import teamMemSecond from "../../assets/images/team2.jpg"
import teamMemThird from "../../assets/images/team3.jpg"
import teamMemFourth from "../../assets/images/team4.jpg"
import teamMemFifth from "../../assets/images/team5.jpg"
import Image from 'next/image'

export default function MeetTeam() {
    return (
        <div >
            <Head>
                <title>Meet Team - Kindred</title>
                <meta name="description" content="Services of Kindred" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className={styles.mainContStory}>
                <div className={styles.innerContStory}>
                    <div className={styles.teamMemberContainer}>
                        <Image src={teamMemFirst} alt="teamfirst" />
                        <div className={styles.contentTmcont}>
                            <h3>Graham Clifford - Lead Pastor</h3>
                            <p>I was born to a couple of Northern California hippies in 1975. There was a lot of brokenness during those early childhood years. My mom, seeking a fresh start was divorced and remarried, and for a few years things were looking up. But then tragedy after tragedy struck. As I look back on my life, I realize just how incredibly lonely I was and just how deeply abandonment rejection shaped my worldview. But all that changed in 1998 when I met my wife, Brianna and her family. They showed me not only the love and acceptance that I had been looking for, they also showed me where real meaning in life is found. It was their introduction to Jesus that helped me find the completeness that I had so desperately searched for my whole life. Therefore, because of what I have experienced, I want to in turn do the same for all those who are lost, lonely and search for something more.</p>
                        </div>
                    </div>
                    <div className={styles.teamMemberContainer}>
                        <Image src={teamMemSecond} alt="teamfirst" />
                        <div className={styles.contentTmcont}>
                            <h3>Brianna Clifford - Pastor of Spiritual Engagement </h3>
                            <p>Some would say that I was born into the church.  If the building was unlocked, my family and I would be there. My mom has always taught a children’s Bible class and my dad has been an elder in the churches of Christ for more than 20 years. My sisters and I were homeschooled in a small mountain town in the Sierra-Nevadas. And for many years I dreamed of replicating my “perfect” family. But most times, I felt I was just short of measuring up to my perceived expectations from others. Where once I felt judged by people for being different, I have now found new freedom through Christ. My heart’s desire, is that the people I cross paths with will come to the same understanding I have; that our past beliefs and mistakes do not define us. We are free to live that life today. </p>
                        </div>
                    </div>
                    <div className={styles.teamMemberContainer}>
                        <Image src={teamMemThird} alt="teamfirst" />
                        <div className={styles.contentTmcont}>
                            <h3>Lauren Renfroe - Executive Pastor </h3>
                            <p>Im an introverted Californian Michigander that never could have imagined what God has called me out of and up into. Held back by my past, mental health and lack of confidence, I graduated with a ministry degree that I wasn't even sure I was capable of using. It was by following God’s call to take a leap of faith that my husband, Devin and I packed up and moved across the country to San Diego, with no idea what was in store. It was in this completely new season of life that I hit rock bottom and reached my breaking point, where I experienced surrender and renewing through Christ like never before leading me to quit my job and take my first full time ministry position. I want to use this new person, this true version of myself to show others that they too can find freedom through Christ. </p>
                        </div>
                    </div>
                    <div className={styles.teamMemberContainer}>
                        <Image src={teamMemFourth} alt="teamfirst" />
                        <div className={styles.contentTmcont}>
                            <h3>Matt Armstrong - Worship Pastor </h3>
                            <p>Music has always been my passion since I can remember!  Being a preacher’s kid, I led my first song when I was 6.  Music kept me going, even when I lost my faith.
                                I moved to Tennessee with my mom when I was 9, and even as my faith dwindled, I feel like God was still speaking to me through music.  I joined choir, band, and then marching band…anything to learn or play music.  I even played in the Pride of the Southland Marching Band at the University of Tennessee!
                                But it wasn’t until 2015, when God opened my eyes, that I realized that my passion for music helped me to find my faith again.  I joined the praise team at my church, and when I had an opportunity to be a worship minister, I couldn’t think of a better way to share my faith than to help others find ways to worship God, whether it’s through music, art, reading, or any other activity.  Use your passion to connect with Jesus today!</p>
                        </div>
                    </div>
                    <div className={styles.teamMemberContainer}>
                        <Image src={teamMemFifth} alt="teamfirst" />
                        <div className={styles.contentTmcont}>
                            <h3>Devin Renfroe - Pastor of Spiritual Development and Formation. </h3>
                            <p>Born and raised in San Diego, I grew up going to church at La Mesa Church of Christ. Little did I know I would one day be a pastor at that very church and be part of the Kindred Church plant team. I never planned on living a life in ministry but God's plans are bigger and that's why I'm here today. As a part of Kindred's ministry staff I strive to help others feel loved just as Christ loves us unconditionally. As the pastor of spiritual development at Kindred, I do my best to help promote spiritual growth in the church. I oversee our community groups and our mentorship program. You’ll find me playing some instrument on Sunday mornings and leading our Wednesday worship nights, but behind the scenes I also create and edit all the the videos that you see online for Kindred.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
