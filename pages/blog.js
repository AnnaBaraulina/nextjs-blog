import { getSortedFilesData } from "../lib/posts";
import { getFilesData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import styles from '../styles/Blog.module.css';

import Link from "next/link";

export async function getStaticProps() {
  const allFilesData = getSortedFilesData().map(({ id }) => getFilesData(id));
  const filesData = await Promise.all(allFilesData);
  return {
    props: {
      filesData,
    },
  };
}

export default function Blog({ filesData }) {
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
        <Link className={utilStyles.link} href="/about">
          About
        </Link>
      </header>
      <div className={styles.containerItem}>
        <h1 className={styles.heading}>BLOG</h1>
        {filesData.map(({ id, title, subtitle }) => {
          return (
            <>
              <div className={styles.item} key={id}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>

                <Link className={styles.linkBlog} href={`/posts/${id}`}>
                  read more
                </Link>
              </div>
            </>
          );
        })}
        <Link className={styles.linkHome} href={`/`}>
          HOME PAGE
        </Link>
      </div>
      </div>
    </>
  );
}
