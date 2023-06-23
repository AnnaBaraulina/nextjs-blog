import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import StaggerContainer, {
  fadeInVariants,
} from "../components/StraggerContainer";
import useEmblaCarousel from "embla-carousel-react";
import { useRef, useEffect } from "react";

import { getSortedFilesData } from "../lib/posts";
import { getSortedWorksData } from "../lib/works";
import Link from "next/link";
import Head from "next/head";
import layout from "../components/layout.module.css";

export const siteTitle = "Dima Baraulin";

export async function getStaticProps() {
  const allFilesData = getSortedFilesData();
  const allWorksData = getSortedWorksData();
  return {
    props: {
      allFilesData,
      allWorksData,
    },
  };
}

function BlogCarousel({ allFilesData }) {
  const carouselRef = useRef(null);
  const { embla } = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!embla) return;
    const onResize = () => {
      embla.reInit();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [embla]);

  return (
    <div className={`${styles.embla} ${styles.embla__scroll}`}>
      <div className={styles.embla__viewport} ref={carouselRef} tabIndex="0">
        <div className={styles.embla__container}>
          {allFilesData.map(({ id, title, subtitle, image }) => (
            <motion.div
              className={styles.embla__slide}
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link className={styles.linkPost} href={`/posts/${id}`}>
                <div className={styles.embla__slide__inner}>
                  <h1 className={styles.titleCarousel}>{title}</h1>
                  <br />
                  <div className={styles.subtitleCarousel}>{subtitle}</div>
                  <img
                    src={image}
                    alt={title}
                    className={styles.embla__image}
                  ></img>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkCarousel({ allWorksData }) {
  const carouselRef = useRef(null);
  const { embla } = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!embla) return;
    const onResize = () => {
      embla.reInit();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [embla]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={carouselRef} tabIndex="0">
        <div className={styles.embla__container}>
          {allWorksData.map(({ id, title, video }) => (
            <motion.div
              className={styles.embla__slideWork}
              key={id}
              whileTap={{ scale: 0.95 }}
            >
              <Link key={id} className={styles.workPost} href={`/works/${id}`}>
                <div className={styles.emblaWork__slide__inner}>
                  <div className={styles.videoContainer}>
                    <h1 className={styles.projectName}>{title}</h1>
                    <iframe
                      src={video}
                      allow="autoplay; fullscreen; picture-in-picture"
                      width="640"
                      height="360"
                    ></iframe>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home({ allFilesData, allWorksData }) {
  const { scrollYProgress } = useScroll({
    offset: ["0hv", "50vh"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={layout.container}>
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
        <section
          className={`${styles.content} relative transform-gpu`}
          style={{
            background: `url('/images/header.jpeg')`,
            backgroundSize: "cover",
          }}
        >
          <StaggerContainer delayChildren={0.5}>
            <motion.div variants={fadeInVariants}>
              <div className={styles.text}>
                <h1 className={styles.textBold}>
                  Hi, i am Dima, 3D motion artist. <br /> You can reach out to
                  me on
                  <a
                    className={styles.aLink}
                    href="https://www.linkedin.com/in/dima-baraulin-6b05273b/"
                  >
                    Linkedin
                  </a>
                </h1>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>
        <section className={styles.blog}>
          <h2 className={styles.headingBlog}>recent posts</h2>
          <BlogCarousel allFilesData={allFilesData} />
          <Link className={styles.headingBlog} href={"/blog"}>
            view all
          </Link>
        </section>
        <section className={styles.works} style={{ overflowX: "scroll" }}>
          <h2 className={styles.headingBlog}>some of our amazing projects</h2>
          <WorkCarousel allWorksData={allWorksData} />
        </section>
        <section className={styles.footer}>
          <h2 className={styles.footerHeading}>© Design and Development <br>
          </br>
           by Anna Baraulina, 2023</h2>
        </section>
      </div>
    </>
  );
}
