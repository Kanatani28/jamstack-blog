import classNamesBind from "classnames/bind";

const Tag = ({
  tag,
  textSize,
}: {
  tag: { name: string };
  textSize?: string;
}): JSX.Element => (
  <span
    className={classNamesBind([
      "inline-block",
      "bg-gray-200",
      "rounded-full",
      "px-3",
      "py-1",
      "font-semibold",
      "text-gray-700",
      "mr-2",
      "mb-2",
      textSize || "text-sm",
    ])}
  >
    {`#${tag.name}`}
  </span>
);

export default Tag;
