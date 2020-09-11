import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllTags } from "../../lib/tags";
import marked from "marked";
import CardImage from "../../components/atoms/CardImage";

const Post = ({
  postData,
  allTags,
}: {
  postData: {
    title: string;
    createdAt: string;
    body: string;
    tags: {
      image: {
        url: string;
        name: string;
      }[];
    };
  };
  allTags: any;
}): JSX.Element => {
  return (
    <Layout tags={allTags}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <CardImage
          alt={postData.tags[0].image.name}
          url={postData.tags[0].image.url}
        />
        <h1 className="text-3xl">{postData.title}</h1>
        <div className="mb-2">
          <Date dateString={postData.createdAt} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.body }} />
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
  // console.log(allTags);
  return {
    props: {
      postData,
      allTags,
    },
  };
};
