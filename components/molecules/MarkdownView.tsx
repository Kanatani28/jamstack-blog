import css from "styled-jsx/css";
import markdown from "markdown-it";
import emoji from "markdown-it-emoji";

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
`;

const md = markdown();
md.use(emoji);

const MarkdownView = ({ content }: { content: string }): JSX.Element => {
  const html = md
    .render(content)
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
