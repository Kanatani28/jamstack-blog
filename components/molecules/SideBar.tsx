import SideBarContent from "../atoms/SideBarContent";
import Tag from "../atoms/Tag";

const TagArea = ({ tags }: { tags: any }): JSX.Element => {
  return (
    <>
      {tags.map((tag, i) => (
        <Tag key={i} tag={tag} />
      ))}
    </>
  );
};

const Socials = (): JSX.Element => (
  <div className="flex justify-center flex-row space-x-3">
    <a href="https://github.com/Kanatani28" target="_blank" rel="noreferrer">
      <img className="w-16" src="/assets/icon_github.png" />
    </a>
    <a href="https://github.com/Kanatani28" target="_blank" rel="noreferrer">
      <img className="w-16" src="/assets/icon_qiita.png" />
    </a>
    <a href="https://github.com/Kanatani28" target="_blank" rel="noreferrer">
      <img className="w-16" src="/assets/icon_twitter.png" />
    </a>
  </div>
);

const SideBar = ({ tags }: { tags: any }): JSX.Element => {
  console.log(tags);
  return (
    <div className="max-w-sm overflow-hidden mx-5 px-5 space-y-10">
      <SideBarContent title="TAGS" content={<TagArea tags={tags} />} />
      <SideBarContent title="SOCIALS" content={<Socials />} />
    </div>
  );
};

export default SideBar;
