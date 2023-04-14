import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css'

import { getSortedFilesData } from '../lib/files';
import Link from 'next/link';

import Image from 'next/image';
import Head from 'next/head';
import layout from '../components/layout.module.css'
import Date from '../components/date';

import imagesData from '../data/data';



export const siteTitle = 'Dima Baraulin';

export async function getStaticProps() {

 /* const allPostsData = getSortedPostsData();*/
  const allFilesData = getSortedFilesData();
  return {
    props: {
      /*allPostsData,*/
      allFilesData,
    },
  };
  
  
}


export default function Home({ allFilesData }) {
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
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={layout.container}>
      <header className={styles.header}>
        <Link className={utilStyles.link} href='#'>Works</Link>
        <Link className={utilStyles.link} href='#'>Blog</Link>
        <Link className={utilStyles.link} href='#'>Contact</Link>
        <Link className={utilStyles.link} href='#'>About</Link>
      </header>
      <section className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.textBold}>Hi, i am Dima, 3D motion artist. <br/> You can reach out to me on <a className={utilStyles.aLink} href='https://www.linkedin.com/in/dima-baraulin-6b05273b/'>Linkedin</a></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        <Image
              priority
              src="/images/profile.jpeg"
              className={utilStyles.borderCircle}
              height={250}
              width={250}
              alt=""
            />
        
      </section>
      <section className={utilStyles.blog}>
       <h2 className={utilStyles.headingBlog}>Recent posts</h2>

      <div className={utilStyles.blogContainer}>
       <ul className={utilStyles.list}>
       {firstTwoFiles.map(({ id, date, title, subtitle }, index) => {
     
        const image = imagesData.file.images[index];
        return (
          <li className={utilStyles.listItem} key={id}>
            <div className={utilStyles.itemContainer}>
              {/* Отображаем изображение */}
              {image && (
                <Image
                  src={image.path}
                  alt=''
                  width={250}
                  height={150}
                  className={utilStyles.blogPicture}
                />
              )}
        <Link className={utilStyles.blogTitle} href={`/files/${id}`}>{title}</Link>
        <br />
        <div className={utilStyles.blogSubtitle}>{subtitle}</div>
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </div>
    </li>
  );
})}
          </ul>
        </div>

      </section>
     
      </div>
      </>
  );
}
