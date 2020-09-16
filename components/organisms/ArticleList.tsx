import Head from "next/head";
import { siteTitle } from "../layout";
import ArticleCard from "../molecules/ArticleCard";
import Pagination from "../atoms/Pagination";

const ArticleList = ({
  articles,
  articlesTotalCount,
  currentPage,
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
}): JSX.Element => (
  <>
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
                content={article.content}
                tags={article.tags}
              />
            );
          })}
        </div>
      </div>
    </section>
  </>
);

export default ArticleList;
