import marked from "marked";

// const postsDirectory = path.join(process.cwd(), "posts");

export async function getSortedPostsData() {
  const articles = await fetch(`${process.env.API_HOST}/articles`, {
    headers: { "x-api-key": process.env.X_API_KEY },
  }).then((response) => {
    return response.json();
  });

  return articles;
}

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);
//   return fileNames.map((fileName) => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, ""),
//       },
//     };
//   });
// }

// export async function getPostData(id: string) {
//   const fullPath = path.join(postsDirectory, `${id}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents);

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...(matterResult.data as { date: string; title: string }),
//   };
// }

export function getBegining(body: string): string {
  return (
    marked(body)
      .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
      .slice(0, 45 * 4) + "..."
  );
}
