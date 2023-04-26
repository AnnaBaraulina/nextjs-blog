import { getSortedFilesData } from "../lib/posts";
import { getFilesData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

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
        <Link className={utilStyles.link} href="/about">
          About
        </Link>
      </header>
      <div className={utilStyles.blogContainer}>
        <h1 className={utilStyles.blogHeading}>BLOG</h1>
        {filesData.map(({ id, title, subtitle }) => {
          return (
            <>
              <div className={utilStyles.cont}>
                <div className={utilStyles.title}>{title}</div>
                <div className={utilStyles.subtitle}>{subtitle}</div>

                <Link className={utilStyles.linkBlog} href={`/posts/${id}`}>
                  read more
                </Link>
              </div>
            </>
          );
        })}
        <Link className={utilStyles.linkHome} href={`/`}>
          HOME PAGE
        </Link>
      </div>
      </div>
    </>
  );
}
