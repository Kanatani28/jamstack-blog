import Link from "next/link";
import classNames from "classnames/bind";

const MenuLink = ({
  title,
  url,
  notYet,
}: {
  title: string;
  url: string;
  notYet?: boolean;
}): JSX.Element => (
  <Link href={url}>
    <a
      className={classNames(
        "text-center",
        "hover:bg-gray-200",
        "py-4",
        "text-sm",
        "hover:text-black",
        "text-white"
      )}
      style={notYet ? { cursor: "not-allowed", pointerEvents: "none" } : {}}
    >
      {title}
    </a>
  </Link>
);

export default MenuLink;
