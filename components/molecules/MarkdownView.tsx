import css from "styled-jsx/css";
import markdown from "markdown-it";
import emoji from "markdown-it-emoji";
import hljs from "highlight.js";

const { className, styles } = css.resolve`
  h1,
  h2,
  h3 {
    @apply font-bold my-2;
  }
  h1 {
    color: green;
    @apply text-2xl;
  }
  h2 {
    color: green;
    @apply text-xl;
  }
  h3 {
    color: green;
    @apply text-lg;
  }
  table,
  td,
  th {
    border: solid 1px #000000;
  }
  pre {
    @apply my-10;
  }
  code {
    @apply text-sm;
  }
`;

const md = markdown({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        console.log(lang);
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});
md.use(emoji);

const MarkdownView = ({ content }: { content: string }): JSX.Element => {
  const html = md
    .render(
      content.replace(/```.*\n/g, (codePrefix) => codePrefix.replace(/:.*/, ""))
    )
    .replace(/<[^>|/]*>/g, (noClassHtmlStr) =>
      noClassHtmlStr.replace(">", ` class="${className}">`)
    );
  return (
    <>
      <div
        className={className}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
      {styles}
    </>
  );
};

export default MarkdownView;
