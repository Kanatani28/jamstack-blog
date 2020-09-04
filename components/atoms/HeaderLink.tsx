import Link from "next/link";

const HeaderLink = ({
  title,
  url,
}: {
  title: string;
  url: string;
}): JSX.Element => (
  <Link href={url}>
    <a className="py-10 text-lg">{title}</a>
  </Link>
);

export default HeaderLink;
