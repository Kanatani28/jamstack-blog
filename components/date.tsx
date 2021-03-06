import { parseISO, format } from "date-fns";
import classNamesBind from "classnames/bind";

const DATE_FORMAT = "LLLL d, yyyy";

const Date = ({
  dateString,
  textSize,
}: {
  dateString: string;
  textSize?: string;
}): JSX.Element => {
  const date = parseISO(dateString);
  return (
    <time
      className={classNamesBind([
        "text-white",
        "inline-block",
        textSize || "text-xs",
        "rounded",
        "bg-gray-800",
        "px-2",
      ])}
      dateTime={dateString}
    >
      {format(date, DATE_FORMAT)}
    </time>
  );
};

export default Date;
