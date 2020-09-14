import classNamesBind from "classnames/bind";
import Link from "next/link";

const commonClasses = classNamesBind([
  "inline-block",
  "bg-gray-200",
  "hover:bg-gray-400",
  "rounded-full",
  "px-3",
  "py-1",
  "font-semibold",
  "text-gray-700",
  "mr-2",
  "mb-2",
]);

const Tag = ({
  tag,
  textSize,
}: {
  tag: { name: string };
  textSize?: string;
}): JSX.Element => (
  <Link href={`/tag/${tag.name}`}>
    <span
      className={classNamesBind(commonClasses, textSize || "text-sm")}
      style={{ cursor: "pointer" }}
    >
      {`#${tag.name}`}
    </span>
  </Link>
);

export default Tag;
