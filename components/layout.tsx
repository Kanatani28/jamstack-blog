import Head from "next/head";
import Link from "next/link";
import Header from "./molecules/Header";
import Footer from "./molecules/Footer";

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
      <Header title={siteTitle} />
      <main className="container mx-auto px-20">
        <div>
          <div className="float-left w-2/3">{children}</div>
          <div className="float-left w-1/3 bg-gray-400">
            <div className="max-w-sm overflow-hidden mx-3">
              <div className="px-6 py-4">
                <div className="text-center font-bold text-xl mb-2">TAGS</div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #photography
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #winter
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="clear-both"></div>
        </div>
      </main>
      <Footer />
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
