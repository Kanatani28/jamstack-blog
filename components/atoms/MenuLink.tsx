import Link from "next/link";
import classNamesBind from "classnames/bind";

const commonClasses = classNamesBind([
  "text-center",
  "hover:bg-gray-200",
  "py-4",
  "text-sm",
  "hover:text-black",
  "text-white",
]);

const MenuLink = ({
  title,
  url,
  notYet,
}: {
  title: string;
  url: string;
  notYet?: boolean;
}): JSX.Element => (
  <>
    {!notYet && (
      <Link href={url}>
        <a className={commonClasses}>{title}</a>
      </Link>
    )}
    {notYet && (
      <>
        <div className={classNamesBind(commonClasses, "hover:line-through")}>
          {title}
        </div>
        <style jsx>{`
          div {
            cursor: not-allowed;
          }
        `}</style>
      </>
    )}
  </>
);

export default MenuLink;
