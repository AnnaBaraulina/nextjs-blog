import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <>
      <div className={utilStyles.containerAbout}>
        <header className={styles.header}>
          <Link className={utilStyles.link} href="#">
            Works
          </Link>
          <Link className={utilStyles.link} href="/blog">
            Blog
          </Link>
          <Link className={utilStyles.link} href="#">
            Contact
          </Link>
          <Link className={utilStyles.link} href="#">
            About
          </Link>
        </header>
        <div className="">
          <h1 className={utilStyles.experienceTitle}>Dima Baraulin</h1>
          <h2 className={utilStyles.experienceName}>Summary</h2>
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
          <h2 className={utilStyles.experienceName}>Experience</h2>
          <div className={utilStyles.experienceContainer}>
            <img
              className={utilStyles.experienceLogo}
              src={"/images/endless.png"}
            ></img>
            <div className={utilStyles.experience}>
              <p className={utilStyles.company}>Co-founder & Head of production</p>
              <p className={utilStyles.company}>Endless Work</p>
              <p className={utilStyles.company}>Jan 2022 - Present</p>
            </div>
          
          </div>
          <div className={utilStyles.experienceContainer}>
            <img
              className={utilStyles.experienceLogo}
              src={"/images/wrs.png"}
            ></img>
            <div className={utilStyles.experience}>
              <p className={utilStyles.company}>Co-founder & Motion Director</p>
              <p className={utilStyles.company}>WRS Design</p>
              <p className={utilStyles.company}>Jan 2013 - Present</p>
            </div>
          
          </div>
          <div className={utilStyles.experienceContainer}>
            <img
              className={utilStyles.experienceLogo}
              src={"/images/circle.png"}
            ></img>
            <div className={utilStyles.experience}>
              <p className={utilStyles.company}>3D Designer</p>
              <p className={utilStyles.company}>COLORS AND THE KIDS</p>
              <p className={utilStyles.company}>Jan 2015-2015</p>
            </div>
          
          </div>
          <div className={utilStyles.experienceContainer}>
            <img
              className={utilStyles.experienceLogo}
              src={"/images/circle.png"}
            ></img>
            <div className={utilStyles.experience}>
              <p className={utilStyles.company}>Freelance 3D Artist</p>
              <p className={utilStyles.company}>Freelance</p>
              <p className={utilStyles.company}>2005 - 2015</p>
            </div>
          
          </div>
          <h2 className={utilStyles.experienceName}>Education</h2>
          <div>
            <p>Moscow Institute of Electronics and Mathematics
            <br/>
            Bachelor's Degree, Broadcast Design
            <br/>
            2005 - 2011</p>
          </div>
        </div>
      </div>
    </>
  );
}
