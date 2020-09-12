import Head from "next/head";
import Header from "./molecules/Header";
import Footer from "./molecules/Footer";
import SideBar from "./molecules/SideBar";

export const siteTitle = "まろぶろぐ";

const Layout = ({
  children,
  tags,
}: {
  children: React.ReactNode;
  tags: {
    id: string;
    name: string;
    image: {
      url: string;
      name: string;
    };
  }[];
}): JSX.Element => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header title={siteTitle} />
      <main className="container mx-auto px-20">
        <div className="my-5">
          <div className="float-left w-2/3">{children}</div>
          <div className="float-left w-1/3">
            <SideBar tags={tags} />
          </div>
          <div className="clear-both"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
