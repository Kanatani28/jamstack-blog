import Link from "next/link";

const PaginationLink = ({
  text,
  url,
}: {
  text: string | number;
  url: string | number;
}): JSX.Element => (
  <Link href={String(url)}>
    <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 hover:bg-blue-500 text-lg">
      <a>{text}</a>
    </div>
  </Link>
);

const currentPage = 1;
const last = 1;
const links = [];
for (let i = 0; i < last; ++i) {
  if (i === 0) {
    links.push(<PaginationLink url={i + 1} text={"<<"} />);
  }
  links.push(<PaginationLink url={i + 1} text={i + 1} />);
  if (i === last - 1) {
    links.push(<PaginationLink url={i + 1} text={">>"} />);
  }
}
const Pagination = (): JSX.Element => (
  <div className="flex justify-center flex-row py-10">{links}</div>
);

export default Pagination;
