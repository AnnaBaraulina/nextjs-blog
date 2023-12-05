import { getSortedWorksData } from "../lib/works";
import { getWorksData } from "../lib/works";
import styles from "../styles/Works.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React from "react";
import layout from "../components/layout.module.css";

export async function getStaticProps() {
  const allWorksData = getSortedWorksData().map(({ id }) => getWorksData(id));
  const worksData = await Promise.all(allWorksData);
  return {
    props: {
      worksData,
    },
  };
}

export default function Works({ worksData }) {
  const iframeStyle = {
    border: "none",
  };
  return (
    <>
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
        <div className={styles.containerItem}>
          {/*<h1 className={styles.heading}>WORKS</h1>*/}
          {worksData.map(({ id, video, title }, index) => {
            return (
              <Link className={styles.workLink} href={`/works/${id}`} key={id}>
                <h3 className={styles.workTitle}>{title}</h3>
                <div
                  className={`${styles.item} ${
                    styles[`item${index + 1}`]
                  } overlay`}
                >
                  <iframe
                    src={video}
                    allow="autoplay; fullscreen; picture-in-picture"
                    width="100%"
                    height="360"
                    style={iframeStyle}
                  ></iframe>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
