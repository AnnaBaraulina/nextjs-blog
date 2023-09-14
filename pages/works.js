import { getSortedWorksData } from "../lib/works";
import { getWorksData } from "../lib/works";
import styles from "../styles/Works.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React from "react";

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
          {/*<h1 className={styles.heading}>WORKS</h1>*/}
          {worksData.map(({ id, video }, index) => {
            return (
              <React.Fragment key={id}>
                <div className={`${styles.item} ${styles[`item${index + 1}`]}`}>
                  <iframe
                    src={video}
                    allow="autoplay; fullscreen; picture-in-picture"
                    width="100%"
                    height="360"
                    style={iframeStyle}
                  ></iframe>
                </div>
                
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
