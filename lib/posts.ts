import marked from "marked";

// const postsDirectory = path.join(process.cwd(), "posts");

export async function getArticles({
  limit,
  offset = 0,
}: {
  limit: number;
  offset?: number;
}) {
  const articles = await fetch(
    `${process.env.API_HOST}/articles?limit=${limit}&offset=${offset}`,
    {
      headers: { "x-api-key": process.env.X_API_KEY },
    }
  ).then((response) => {
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
}

export const getArticlesByTag = async (tagId: string) => {
  const articles = await fetch(
    `${process.env.API_HOST}/articles?filters=tags[contains]${tagId}`,
    {
      headers: { "x-api-key": process.env.X_API_KEY },
    }
  ).then((response) => {
    return response.json();
  });
  return articles;
};
