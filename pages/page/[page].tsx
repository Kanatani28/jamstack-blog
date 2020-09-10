import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import ArticleCard from "../../components/atoms/ArticleCard";
import Pagination from "../../components/atoms/Pagination";
import { getAllTags } from "../../lib/tags";
import { getPageNumbersWithoutFirst, getOffset } from "../../lib/utils";
import { getArticles } from "../../lib/posts";

const Page = ({
  articles,
  articlesTotalCount,
  currentPage,
  allTags,
}: {
  articles: {
    id: string;
    title: string;
    body: string;
    tags: any;
    createdAt: string;
  }[];
  currentPage: number;
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
    <Layout tags={allTags} home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-4">
            {articles.map((article, i) => {
              return (
                <ArticleCard
                  key={i}
                  title={article.title}
                  url={article.id}
                  date={article.createdAt}
                  bodyBegining={article.body}
                  tags={article.tags}
                />
              );
            })}
          </div>
        </div>
        <Pagination currentPage={currentPage} totalCount={articlesTotalCount} />
      </section>
    </Layout>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesJson = await getArticles({ limit: 6, offset: 1 });
  const pageNumbers = getPageNumbersWithoutFirst(articlesJson.totalCount);

  const paths = pageNumbers.map((v) => {
    return { params: { page: String(v) } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPage = Number(params.page);
  const articlesJson = await getArticles({
    limit: 6,
    offset: getOffset(currentPage),
  });
  const tagsJson = await getAllTags();

  const articles = articlesJson.contents;
  const articlesTotalCount = articlesJson.totalCount;
  const allTags = tagsJson.contents;

  return {
    props: {
      articles,
      currentPage,
      articlesTotalCount,
      allTags,
    },
  };
};
