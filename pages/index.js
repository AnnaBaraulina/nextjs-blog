import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import StaggerContainer, {
  fadeInVariants,
} from "../components/StraggerContainer";
import useEmblaCarousel from "embla-carousel-react";
import { getSortedFilesData } from "../lib/posts";
import { getSortedWorksData } from "../lib/works";
import Link from "next/link";
import Head from "next/head";
import layout from "../components/layout.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const handlePrevious = () => {
    emblaApi?.scrollPrev();
  };
  const handleNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <div className={styles.relative}>
      <button
        aria-label="go to previous slide"
        onClick={handlePrevious}
        className={styles.buttonL}
      >
        <ChevronLeftIcon className={styles.icon} />
      </button>
      <button
        aria-label="go to next slide"
        onClick={handleNext}
        className={styles.buttonR}
      >
        <ChevronRightIcon className={styles.icon} />
      </button>

      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.flex}>
          {allFilesData.map(({ id, title, subtitle, image }) => (
            <div key={id} className={styles.embla__slide}>
              <Link className={styles.linkPost} href={`/posts/${id}`}>
                <h1 className={styles.titleCarousel}>{title}</h1>
                <br />
                <div className={styles.subtitleCarousel}>{subtitle}</div>
                <img
                 
                  src={image}
                  alt={title}
                  className={styles.embla__image}
                ></img>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home({ allFilesData, allWorksData }) {
  const iframeStyle = {
    border: "none",
  };

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
                I've been working through computer arts, studio films, personal projects, music videos, etc.
From WRS to Endless Tools, I've led teams, immersed myself in studio life, and built computer graphics production pipelines. My passion lies between visuals and music.
                </p>
              </div>
            </motion.div>
          </StaggerContainer>
        </section>
        <section className={styles.blog}>
          <BlogCarousel allFilesData={allFilesData} />
          <Link className={styles.headingBlog} href={"/blog"}>
            view all
          </Link>
        </section>
        <section className={styles.works}>
          <div className={styles.worksContainer}>
            {allWorksData.map(({ id, title, video }) => (
              <Link key={id} className={styles.workPost} href={`/works/${id}`}>
                <h1 className={styles.projectName}>{title}</h1>

                <iframe
                  src={video}
                  allow="autoplay; fullscreen; picture-in-picture"
                  width="100%"
                  height="360"
                  style={iframeStyle}
                ></iframe>
              </Link>
            ))}
          </div>
        </section>
        <section className={styles.footer}>
          <p className={styles.footerHeading}>
            © Design and Development <br></br>
            by Anna Baraulina, 2023
          </p>
        </section>
      </div>
    </>
  );
}
