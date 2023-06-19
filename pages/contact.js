import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from '../styles/Contacts.module.css';

export default function Contact() {
  return (
    <>
    <div className={styles.container}>
      <header className={utilStyles.header}>
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
        <div className={styles.contactsContainer}>
          <img src='/images/mail.png' className={styles.logo}></img>
          <p className={styles.contact}>dima@endlesswork.io</p>
        </div>
        <div className={styles.contactsContainer}>
          <img src='/images/linkedin.png' className={styles.logo}></img>
          <p className={styles.contact}>linkedin.com/in/dima-baraulin-6b05273b/</p>
        </div>
        <div className={styles.contactsContainer}>
          <img src='/images/link.png' className={styles.logo}></img>
          <p className={styles.contact}>https://endlesswork.io/</p>
        </div>
        <div className={styles.contactsContainer}>
          <img src='/images/tg.png' className={styles.logo}></img>
          <p className={styles.contact}>t.me/DimaBaraulin</p>
        </div>
      </div>
      </div>
    </>
  );
}