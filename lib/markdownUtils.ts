import markdown from "markdown-it";
import emoji from "markdown-it-emoji";
import hljs from "highlight.js";

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

export const markdownToHtml = (markdownStr: string): string =>
  md.render(markdownStr);

// Qiitaのマークダウンそのままだとハイライトが効かないのでコードのタイトル部分を削除する
export const removeCodeTitles = (markdownStr: string): string => {
  return markdownStr.replace(/```.*\n/g, (codePrefix) =>
    codePrefix.replace(/:.*/, "")
  );
};

export const addStyledJsxClass = (
  htmlStr: string,
  className: string
): string => {
  return htmlStr.replace(/<[^>|/]*>/g, (htmlTag) => {
    return htmlTag.includes("class=")
      ? htmlTag.replace(
          /class=".*"/,
          (classAttr) => classAttr.slice(0, -1) + ` ${className}"`
        )
      : htmlTag.replace(">", ` class="${className}">`);
  });
};
