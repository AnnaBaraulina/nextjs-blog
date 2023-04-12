import { Head } from 'next/head';
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';


//отрисовка каждого поста в блоге, которой мы передаем дату, полученную через гетСтатикПропс
export default function Post({ postData }) {
  console.log(postData)

    return (
     
      <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <header className={styles.header}>
        <Link className={utilStyles.link} href='#'>Works</Link>
        <Link className={utilStyles.link} href='#'>Blog</Link>
        <Link className={utilStyles.link} href='#'>Contact</Link>
      </header>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div>{postData.id}</div>
        <div className={utilStyles.lightText}>
        <div>{postData.date}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </div>
    );
  }


  export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }