import Head from "next/head";
import Link from "next/link";
import HeaderLink from "./atoms/HeaderLink";
import Copyright from "./atoms/Copyright";

export const siteTitle = "まろぶろぐ";

const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
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
      <header>
        <div className="container mx-auto grid grid-cols-4">
          <HeaderLink title="About" url="about" />
          <HeaderLink title="Other" url="other" />
        </div>
        <div className="hero bg-red-100">
          <h1 className="title">{siteTitle}</h1>
          <p className="text-center text-teal-500 text-2xl py-4">
            This is an Example.
          </p>
        </div>
      </header>
      <main className="container mx-auto">{children}</main>
      <footer className="bg-red-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            <HeaderLink title="About" url="about" />
            <HeaderLink title="Other" url="other" />
          </div>
          <hr />
          <Copyright />
        </div>
      </footer>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
