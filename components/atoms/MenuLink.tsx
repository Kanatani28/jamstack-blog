import Link from "next/link";
import classNames from "classnames/bind";

const MenuLink = ({
  title,
  url,
}: {
  title: string;
  url: string;
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
    >
      {title}
    </a>
  </Link>
);

export default MenuLink;
