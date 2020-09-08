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

export async function getAllPostIds() {
  const articles = await fetch(`${process.env.API_HOST}/articles`, {
    headers: { "x-api-key": process.env.X_API_KEY },
  }).then((response) => {
    return response.json();
  });

  return articles.contents.map((article) => {
    return { params: { id: article.id } };
  });
}

export async function getPostData(id: string) {
  const article = await fetch(`${process.env.API_HOST}/articles/${id}`, {
    headers: { "x-api-key": process.env.X_API_KEY },
  }).then((response) => {
    return response.json();
  });

  return { ...article };
  // const fullPath = path.join(postsDirectory, `${id}.md`);
  // const fileContents = fs.readFileSync(fullPath, "utf8");

  // // Use gray-matter to parse the post metadata section
  // const matterResult = matter(fileContents);

  // // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  // // Combine the data with the id and contentHtml
  // return {
  //   id,
  //   contentHtml,
  //   ...(matterResult.data as { date: string; title: string }),
  // };
}

export function getBegining(body: string): string {
  return (
    marked(body)
      .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
      .slice(0, 45 * 4) + "..."
  );
}
