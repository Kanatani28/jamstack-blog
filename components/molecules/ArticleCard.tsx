import Link from "next/link";
import Date from "../date";
import classNames from "classnames/bind";
import Tag from "../atoms/Tag";
import marked from "marked";
import CardImage from "../atoms/CardImage";

const ArticleCard = ({
  title,
  url,
  date,
  bodyBegining,
  top,
  tags,
}: {
  title: string;
  url: string;
  date: string;
  bodyBegining: string;
  top?: boolean;
  tags?: {
    id: string;
    name: string;
    image: {
      name: string;
      url: string;
    };
  }[];
}): JSX.Element => (
  <Link href={`/posts/${url}`}>
    <a>
      <div className="rounded overflow-hidden shadow-lg">
        <CardImage alt={tags[0].image.name} url={tags[0].image.url} />
        <div className="px-6 py-4">
          <Date textSize={top ? "text-sm" : "text-xs"} dateString={date} />
          <div className={classNames([top ? "text-3xl" : "", "mb-2", "mt-2"])}>
            {title}
          </div>
          <p
            className={classNames([
              "text-gray-700",
              top ? "text-base" : "text-sm",
              "mb-2",
              "h-20",
            ])}
          >
            {getBegining(bodyBegining, top)}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {tags?.map((tag, i) => {
            return (
              <Tag key={i} tag={tag} textSize={top ? "text-md" : "text-sm"} />
            );
          })}
        </div>
      </div>
    </a>
  </Link>
);

export default ArticleCard;

function getBegining(body: string, top?: boolean): string {
  return (
    marked(body)
      .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
      .slice(0, (top ? 45 : 22) * 4) + "..."
  );
}
