const SideBarContent = ({
  title,
  content,
}: {
  title: string;
  content: JSX.Element;
}): JSX.Element => (
  <div className="px-1 py-4 divide-y-2 border-solid border-2">
    <div className="text-center font-bold text-xl mb-2">{title}</div>
    <div className="px-6 pt-4 pb-2">{content}</div>
  </div>
);

export default SideBarContent;
