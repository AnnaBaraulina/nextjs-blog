import { getAllWorksIds, getWorksData } from "../../lib/works";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/Work.module.css";
import layout from "../../components/layout.module.css";

import Link from "next/link";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const workData = await getWorksData(params.id);

  return {
    props: {
      workData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllWorksIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Work({ workData }) {
  return (
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
      <h1 className={utilStyles.headingXl}>{workData.title}</h1>
      <div className={styles.videoContainer}>
        <iframe
          src={workData.video}
          width="640"
          height="360"
          frameBsorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>
      <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
      <Link className={utilStyles.linkBack} href="/blog">
        Go back
      </Link>
    </div>
  );
}
