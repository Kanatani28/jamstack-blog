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
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
  h3 {
    @apply text-lg;
  }
  table,
  td,
  th {
    border: solid 1px #000000;
  }
  pre {
    @apply my-3;
  }
  code {
    @apply text-sm;
  }
`;

const md = markdown({
  breaks: true,
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
    .replace(/<[^>|/]*>/g, (htmlTag) => {
      return htmlTag.includes("class=")
        ? htmlTag.replace(
            /class=".*"/,
            (classAttr) => classAttr.slice(0, -1) + ` ${className}"`
          )
        : htmlTag.replace(">", ` class="${className}">`);
    });
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
