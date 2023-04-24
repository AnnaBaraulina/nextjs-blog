import { getSortedFilesData } from "../lib/posts";
import { getFilesData } from "../lib/posts";
import styles from "../styles/utils.module.css";
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
      <div className={styles.blogContainer}>
        <h1 className={styles.blogHeading}>BLOG</h1>
        {filesData.map(({ id, title, subtitle }) => {
          return (
            <>
              <div className={styles.cont}>
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
    </>
  );
}
