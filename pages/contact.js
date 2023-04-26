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
        <Link className={utilStyles.link} href="#">
          Contact
        </Link>
        <Link className={utilStyles.link} href="#">
          About
        </Link>
      </header>
      <div className={utilStyles.contacts}>
        
      </div>
      </div>
    </>
  );
}