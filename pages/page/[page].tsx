import Layout from "../../components/layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllTags } from "../../lib/tags";
import { getPageNumbersWithoutFirst, getOffset } from "../../lib/pageUtils";
import { getArticles } from "../../lib/posts";
import ArticleList from "../../components/organisms/ArticleList";
import Pagination from "../../components/atoms/Pagination";

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
    <Layout tags={allTags}>
      <ArticleList
        articles={articles}
        articlesTotalCount={articlesTotalCount}
        currentPage={currentPage}
      />
      <Pagination currentPage={currentPage} totalCount={articlesTotalCount} />
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
