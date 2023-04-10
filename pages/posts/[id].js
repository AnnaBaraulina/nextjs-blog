import { getAllPostIds, getPostData } from '../../lib/posts';
import { Head }from 'next/head';
import { Date } from '../../components/date';
import utilStyles from '../../styles/utils.module.css'
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

export const siteTitle = 'Dima Baraulin';

export async function getStaticProps({ params }) {
  console.log('!')
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
    console.log(postData);
    return {
      props: {
        postData,
        
      },
    };
  }


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


//отрисовка каждого поста в блоге, которой мы передаем дату, полученную через гетСтатикПропс
export default function Post({ postData }) {
    return (
       <>
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
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </>
    );
  }
