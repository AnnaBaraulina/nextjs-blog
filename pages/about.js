import Link from "next/link";
import styles from "../styles/About.module.css";
import homeStyles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import layout from "../components/layout.module.css";

export default function About() {
  return (
    <>
      <div className={layout.container}>
        <header className={utilStyles.header}>
          <Link className={utilStyles.link} href="/">
            Home
          </Link>
          <Link className={utilStyles.link} href="/works">
            Works
          </Link>
          <Link className={utilStyles.link} href="/blog">
            Blog
          </Link>
          <Link className={utilStyles.link} href="/contact">
            Contact
          </Link>
          <Link className={utilStyles.link} href="/about">
            About
          </Link>
        </header>
        <div className="">
          <h1 className={styles.about}>Dima Baraulin</h1>
          <h2 className={styles.summary}>Summary</h2>
          <p>
            I am a seasoned 3D Designer with 15+ years of experience <br />
            and a co-founder of two design studios, WRS.design and Endless Work.
            <br />
            As Head of 3D Production and Visual Director,
            <br />
            I have worked with top brands such as Nike, R/GA, and Apple.
            <br />
            My skills include leading Houdini & Cinema4D production pipelines,
            <br />
            character animation in Maya, as well as CG-supervising for film
            shoots.
            <br />
            I have experience in AR/VR projects, digital motion design, and CGI.
            <br />I am passionate about using the latest technologies and trends
            in my work and
            <br />
            am a strong communicator and leader.
          </p>
          <h2 className={styles.summary}>Experience</h2>
          <div className={styles.experienceContainer}>
            <img className={styles.logo} src={"/images/endless.png"}></img>
            <div className={styles.experience}>
              <p className={styles.info}>Co-founder & Head of production</p>
              <p className={styles.info}>Endless Work</p>
              <p className={styles.info}>Jan 2022 - Present</p>
            </div>
          </div>
          <div className={styles.experienceContainer}>
            <img className={styles.logo} src={"/images/wrs.png"}></img>
            <div className={styles.experience}>
              <p className={styles.info}>Co-founder & Motion Director</p>
              <p className={styles.info}>WRS Design</p>
              <p className={styles.info}>Jan 2013 - Present</p>
            </div>
          </div>
          <div className={styles.experienceContainer}>
            <img className={styles.logo} src={"/images/circle.png"}></img>
            <div className={styles.experience}>
              <p className={styles.info}>3D Designer</p>
              <p className={styles.info}>COLORS AND THE KIDS</p>
              <p className={styles.info}>Jan 2015-2015</p>
            </div>
          </div>
          <div className={styles.experienceContainer}>
            <img className={styles.logo} src={"/images/circle.png"}></img>
            <div className={styles.experience}>
              <p className={styles.info}>Freelance 3D Artist</p>
              <p className={styles.info}>Freelance</p>
              <p className={styles.info}>2005 - 2015</p>
            </div>
          </div>
          <h2 className={styles.summary}>Education</h2>
          <div>
            <p>
              Moscow Institute of Electronics and Mathematics
              <br />
              Bachelor's Degree, Broadcast Design
              <br />
              2005 - 2011
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
