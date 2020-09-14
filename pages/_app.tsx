import "./style.css";
import { AppProps } from "next/app";

import "highlight.js/styles/monokai-sublime.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
