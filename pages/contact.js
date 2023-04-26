import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

export default function Contact() {
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
        <Link className={utilStyles.link} href="/contact">
          Contact
        </Link>
        <Link className={utilStyles.link} href="about">
          About
        </Link>
      </header>
      <div className={utilStyles.contacts}>
        <div className={utilStyles.contactsContainer}>
          <img src='/images/mail.png' className={utilStyles.experienceLogo}></img>
          <p className={utilStyles.contact}>dima@endlesswork.io</p>
        </div>
        <div className={utilStyles.contactsContainer}>
          <img src='/images/linkedin.png' className={utilStyles.experienceLogo}></img>
          <p className={utilStyles.contact}>linkedin.com/in/dima-baraulin-6b05273b/</p>
        </div>
        <div className={utilStyles.contactsContainer}>
          <img src='/images/link.png' className={utilStyles.experienceLogo}></img>
          <p className={utilStyles.contact}>https://endlesswork.io/</p>
        </div>
        <div className={utilStyles.contactsContainer}>
          <img src='/images/tg.png' className={utilStyles.experienceLogo}></img>
          <p className={utilStyles.contact}>t.me/DimaBaraulin</p>
        </div>
      </div>
      </div>
    </>
  );
}