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
