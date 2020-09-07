import SideBarContent from "../atoms/SideBarContent";

const tags = (): JSX.Element => (
  <>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #Python
    </span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #Kotlin
    </span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #Spring
    </span>
  </>
);

const socials = (): JSX.Element => (
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

const SideBar = (): JSX.Element => (
  <div className="max-w-sm overflow-hidden mx-5 px-5 space-y-10">
    <SideBarContent title="TAGS" content={tags()} />
    <SideBarContent title="SOCIALS" content={socials()} />
  </div>
);

export default SideBar;
