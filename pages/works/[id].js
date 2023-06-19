import { getAllWorksIds, getWorksData } from "../../lib/works";
import utilStyles from "../../styles/utils.module.css";
import styles from '../../styles/Work.module.css';

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
    <article className={styles.container}>
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
    {/*  <img src={fileData.image} alt={fileData.title} />*/}

      <Link className={styles.link} href={"/"}>
        HOME PAGE
      </Link>
    </article>
  );
}