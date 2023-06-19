import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const worksDirectory = path.join(process.cwd(), "works");

export function getSortedWorksData() {
    // Get file names under /posts
    const fileNamesW = fs.readdirSync(worksDirectory);
    const allWorksData = fileNamesW.map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");
  
      // Read markdown file as string
      const fullPath = path.join(worksDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
  
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);
  
      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
      };
    });
    // Sort posts by date
    return allWorksData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  
  //получаем id страниц для создания маршрутов и последующей отрисовки их содержимого
  export function getAllWorksIds() {
    const fileNames = fs.readdirSync(worksDirectory);
      return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ""),
        },
      };
    });
  }
  //получаем данные из файлов md для последующей их отрисовки на странице с помощью getStaticProps
  export async function getWorksData(id) {
    const fullPath = path.join(worksDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
  
      ...matterResult.data,
    };
  }