import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getArticles } from "../lib/posts";
import { GetStaticProps } from "next";
import ArticleCard from "../components/molecules/ArticleCard";
import Pagination from "../components/atoms/Pagination";
import { getAllTags } from "../lib/tags";

const Home = ({
  articles,
  articlesTotalCount,
  allTags,
}: {
  articles: {
    id: string;
    title: string;
    content: string;
    tags: any;
    createdAt: string;
  }[];
  articlesTotalCount: number;
  allTags: {
    id: string;
    name: string;
    image: {
      url: string;
      name: string;
    };
  }[];
}): JSX.Element => {
  return (
    <Layout tags={allTags}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="grid grid-cols-1 gap-4">
          <ArticleCard
            title={articles[0].title}
            url={articles[0].id}
            date={articles[0].createdAt}
            content={articles[0].content}
            tags={articles[0].tags}
            top
          />
          <div className="grid grid-cols-2 gap-4">
            {articles.slice(1).map((post, i) => {
              return (
                <ArticleCard
                  key={i}
                  title={post.title}
                  url={post.id}
                  date={post.createdAt}
                  content={post.content}
                  tags={post.tags}
                />
              );
            })}
          </div>
        </div>
        <Pagination currentPage={1} totalCount={articlesTotalCount} />
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const articlesJson = await getArticles({ limit: 5 });
  const tagsJson = await getAllTags();

  const articles = articlesJson.contents;
  const allTags = tagsJson.contents;
  const articlesTotalCount = articlesJson.totalCount;

  return {
    props: {
      articles,
      articlesTotalCount,
      allTags,
    },
  };
};
