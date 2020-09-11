import Link from "next/link";
import { getPageNumbers, isFirst, isLast } from "../../lib/pageUtils";
import classNamesBind from "classnames/bind";

const PaginationLink = ({
  text,
  url,
  isActive,
  isDisabled,
}: {
  text: string | number;
  url: string | number;
  isActive?: boolean;
  isDisabled?: boolean;
}): JSX.Element => {
  return (
    <Link href={String(url)}>
      <div
        className={classNamesBind([
          isActive ? "bg-blue-500" : "",
          isDisabled ? "" : "hover:bg-blue-500",
          "text-gray-700",
          "text-center",
          "bg-gray-400",
          "px-4",
          "py-2",
          "m-2",
          "text-lg",
        ])}
        style={
          isDisabled || isActive
            ? { pointerEvents: "none" }
            : { cursor: "pointer" }
        }
      >
        <a>{text}</a>
      </div>
    </Link>
  );
};

const Pagination = ({
  currentPage,
  totalCount,
}: {
  currentPage: number;
  totalCount: number;
}): JSX.Element => {
  const pageNumbers = getPageNumbers(totalCount);
  const links = pageNumbers.map((v) => (
    <PaginationLink
      key={v}
      text={v}
      url={v === 1 ? "/" : `/page/${v}`}
      isActive={currentPage === v}
    />
  ));
  links.unshift(
    <PaginationLink
      isDisabled={isFirst(currentPage)}
      url={currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`}
      text="<<"
    />
  );
  links.push(
    <PaginationLink
      isDisabled={isLast(currentPage, totalCount)}
      url={`/page/${currentPage + 1}`}
      text=">>"
    />
  );
  return <div className="flex justify-center flex-row py-10">{links}</div>;
};

export default Pagination;
