import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getArticles } from "../lib/posts";
import { GetStaticProps } from "next";
import ArticleCard from "../components/atoms/ArticleCard";
import Pagination from "../components/atoms/Pagination";
import { getAllTags } from "../lib/tags";

const Home = ({
  articles,
  allTags,
}: {
  articles: {
    id: string;
    title: string;
    body: string;
    tags: any;
    createdAt: string;
  }[];
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
    <Layout tags={allTags} home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="grid grid-cols-1 gap-4">
          <ArticleCard
            title={articles[0].title}
            url={articles[0].id}
            date={articles[0].createdAt}
            bodyBegining={articles[0].body}
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
                  bodyBegining={post.body}
                  tags={post.tags}
                />
              );
            })}
          </div>
        </div>
        <Pagination />
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

  return {
    props: {
      articles,
      allTags,
    },
  };
};
