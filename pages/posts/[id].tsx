import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllTags } from "../../lib/tags";
import marked from "marked";

const Post = ({
  postData,
  allTags,
}: {
  postData: {
    title: string;
    createdAt: string;
    body: string;
  };
  allTags: any;
}): JSX.Element => {
  return (
    <Layout tags={allTags}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.createdAt} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: marked(postData.body) }} />
      </article>
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  const tagsJson = await getAllTags();

  const allTags = tagsJson.contents;
  console.log(postData);
  console.log(allTags);
  return {
    props: {
      postData,
      allTags,
    },
  };
};
