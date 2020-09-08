import Layout, { siteTitle } from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import ArticleCard from "../../components/atoms/ArticleCard";
import Pagination from "../../components/atoms/Pagination";

const TEST_TITLE =
  "Spring×Kotlin×MySQL×Mybatis×ThymeleafでサンプルWebアプリ作ってみた";

const Page = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}): JSX.Element => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <ArticleCard
              title={TEST_TITLE}
              url="a"
              date="2017-04-20"
              bodyBegining="a"
            />
            <ArticleCard
              title={TEST_TITLE}
              url="a"
              date="2017-04-20"
              bodyBegining="a"
            />
            <ArticleCard
              title={TEST_TITLE}
              url="a"
              date="2017-04-20"
              bodyBegining="a"
            />
            <ArticleCard
              title={TEST_TITLE}
              url="a"
              date="2017-04-20"
              bodyBegining="a"
            />
            <ArticleCard
              title={TEST_TITLE}
              url="a"
              date="2017-04-20"
              bodyBegining="a"
            />
            <ArticleCard
              title={TEST_TITLE}
              url="a"
              date="2017-04-20"
              bodyBegining="a"
            />
          </div>
        </div>
        <Pagination />
      </section>
    </Layout>
  );
};

export default Page;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllPostIds();
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const postData = await getPostData(params.page as string);
//   return {
//     props: {
//       postData,
//     },
//   };
// };
