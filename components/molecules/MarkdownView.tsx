import css from "styled-jsx/css";
import {
  removeCodeTitles,
  addStyledJsxClass,
  markdownToHtml,
} from "../../lib/markdownUtils";

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
  pre,
  p {
    @apply my-3;
  }
  code {
    @apply text-sm;
  }
`;

const MarkdownView = ({ content }: { content: string }): JSX.Element => {
  const html = addStyledJsxClass(
    markdownToHtml(removeCodeTitles(content)),
    className
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
