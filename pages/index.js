import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import StaggerContainer, {
  fadeInVariants,
} from "../components/StraggerContainer";
import useEmblaCarousel from "embla-carousel-react";
import { useRef, useEffect } from "react";

import { getSortedFilesData } from "../lib/posts";
import Link from "next/link";
import Head from "next/head";
import layout from "../components/layout.module.css";
import Date from "../components/date";
import ArrLeft from "../public/images/arr_left.png";
import ArrRight from "../public/images/arr_right.png";

export const siteTitle = "Dima Baraulin";

export async function getStaticProps() {
  const allFilesData = getSortedFilesData();
  return {
    props: {
      allFilesData,
    },
  };
}

function BlogCarousel({ allFilesData }) {
  const carouselRef = useRef(null);
  const { embla, scrollNext, scrollPrev } = useEmblaCarousel({ loop: true });

  useEffect(() => {
    console.log(carouselRef.current);
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
          {allFilesData.map(({ id, date, title, subtitle, image }) => (
            <motion.div
              className={styles.embla__slide}
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                className={utilStyles.linkPost}
                href={`/posts/${id}`}
                
              >
                <div className={styles.embla__slide__inner}>
                  <h1 className={utilStyles.blogTitle}>{title}</h1>
                  <br />
                  <div className={utilStyles.blogSubtitle}>{subtitle}</div>
                  <img src={image} alt={title} className={utilStyles.blogPic}></img>
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
       {/* <button
          className={`${styles.embla__buttonPrev} ${styles.embla__button}`}
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className={`${styles.embla__buttonNext} ${styles.embla__button}`}
          onClick={scrollNext}
        >
          Next
          </button>*/}
      </div>
    </div>
  );
}

export default function Home({ allFilesData }) {
  const { scrollYProgress } = useScroll({
    offset: ["0hv", "50vh"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const firstTwoFiles = allFilesData.slice(0, 2);

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
                    className={utilStyles.aLink}
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
        <section className={utilStyles.blog}>
          <h2 className={utilStyles.headingBlog}>Recent posts</h2>
          <BlogCarousel allFilesData={allFilesData} />
          <Link className={utilStyles.headingBlog} href={"/blog"}>
            View all
          </Link>
        </section>
      </div>
    </>
  );
}
