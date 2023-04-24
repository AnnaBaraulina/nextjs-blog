import { getAllFilesIds, getFilesData } from "../../lib/files";
import utilStyles from '../../styles/utils.module.css';
import { Date }from '../../components/date';
import imagesData from '../../data/data'
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const fileData = await getFilesData(params.id);
  
    return {
      props: {
        fileData,
      },
    };
  }
  export async function getStaticPaths() {
    const paths = getAllFilesIds();
    return {
      paths,
      fallback: false,
    };
  }


  export default function File({ fileData }) {
  
  
    return (
      <article className={utilStyles.fileContainer}>
        <h1 className={utilStyles.headingXl}>{fileData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: fileData.contentHtml }} />
        <img src={fileData.image} alt={fileData.title}/>
 
       <Link className={utilStyles.homeLink} href={'/'}>HOME PAGE</Link>
      </article>
  
    );
  }