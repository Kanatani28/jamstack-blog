import Layout from "../../components/layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllTags } from "../../lib/tags";
import { getArticlesByTag } from "../../lib/posts";
import ArticleList from "../../components/organisms/ArticleList";

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
    </Layout>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const tagsJson = await getAllTags();

  const tags = tagsJson.contents;

  const paths = tags.map((v) => {
    return { params: { tag: v.name } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tagName = params.tag;

  const tagsJson = await getAllTags();
  const allTags = tagsJson.contents;
  const filteredTags = allTags.filter((tag) => tag.name === tagName);

  const articlesJson = await getArticlesByTag(filteredTags[0].id);
  const articles = articlesJson.contents;
  const articlesTotalCount = articlesJson.totalCount;
  const currentPage = 2;
  return {
    props: {
      articles,
      currentPage,
      articlesTotalCount,
      allTags,
    },
  };
};
