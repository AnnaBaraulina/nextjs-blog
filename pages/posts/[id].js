import { getAllFilesIds, getFilesData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/File.module.css";
import layout from "../../components/layout.module.css";

import Link from "next/link";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const fileData = await getFilesData(params.id);

  return {
    props: {
      fileData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllFilesIds();
  return {
    paths,
    fallback: false,
  };
}

export default function File({ fileData }) {
  return (
    <article className={layout.container}>
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
      <h1 className={utilStyles.headingXl}>{fileData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: fileData.contentHtml }} />
      <img className={styles.image} src={fileData.image} alt={fileData.title} />
      <Link className={utilStyles.linkBack} href="/blog">
        Go back
      </Link>
    </article>
  );
}
