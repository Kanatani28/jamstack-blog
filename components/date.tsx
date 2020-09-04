import { parseISO, format } from "date-fns";

const DATE_FORMAT = "LLLL d, yyyy";

const Date = ({ dateString }: { dateString: string }): JSX.Element => {
  const date = parseISO(dateString);
  return (
    <time className="text-sm" dateTime={dateString}>
      {format(date, DATE_FORMAT)}
    </time>
  );
};

export default Date;
