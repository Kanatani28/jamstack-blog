import Link from "next/link";
import Date from "../date";
import classNames from "classnames/bind";

const ArticleCard = ({
  title,
  url,
  date,
  bodyBegining,
  top,
}: {
  title: string;
  url: string;
  date: string;
  bodyBegining: string;
  top?: boolean;
}): JSX.Element => (
  <>
    <div className="rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://images.microcms-assets.io/protected/ap-northeast-1:e6a442ba-1b7e-408b-91c1-74600a2683a1/service/maro-blog/media/python.png"
        alt="Sunset in the mountains"
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
          ])}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  </>
);

export default ArticleCard;
