import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import ArticleCard from "../components/atoms/ArticleCard";
import Pagination from "../components/atoms/Pagination";

const TEST_TITLE =
  "Spring×Kotlin×MySQL×Mybatis×ThymeleafでサンプルWebアプリ作ってみた";

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}): JSX.Element => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="grid grid-cols-1 gap-4">
          <ArticleCard
            title={TEST_TITLE}
            url="a"
            date="2017-04-20"
            bodyBegining="a"
            top
          />
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
          </div>
        </div>
        <Pagination />
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
