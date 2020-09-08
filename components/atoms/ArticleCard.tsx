import Link from "next/link";
import Date from "../date";
import classNames from "classnames/bind";
import Tag from "./Tag";
import marked from "marked";

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
  <Link href={`posts/${url}`}>
    <a>
      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={
            tags
              ? tags[0].image.url
              : "https://images.microcms-assets.io/protected/ap-northeast-1:e6a442ba-1b7e-408b-91c1-74600a2683a1/service/maro-blog/media/PC.png"
          }
          alt={tags ? tags[0].image.name : "a"}
        />
        <div className="px-6 py-4">
          <Date dateString={date} />
          <div className={classNames([top ? "text-3xl" : "", "mb-2"])}>
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
            return <Tag key={i} tag={tag} />;
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
