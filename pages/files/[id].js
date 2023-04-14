import { getAllFilesIds, getFilesData } from "../../lib/files";
import utilStyles from '../../styles/utils.module.css';
import { Date }from '../../components/date';
import imagesData from '../../data/data'
import Image from "next/image";

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
  
   const image = imagesData.file.images.find(img => img.id === fileData.id)
    return (
      <article className={utilStyles.fileContainer}>
        <h1 className={utilStyles.headingXl}>{fileData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: fileData.contentHtml }} />
        <Image
          src={image.path}  
          alt={fileData.title}
          width={image.sizes[0]}
          height={image.sizes[1]}
        />
      
      </article>
  
    );
  }