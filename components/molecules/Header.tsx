import MenuLink from "../atoms/MenuLink";
import classNames from "classnames";

const Header = ({ title }: { title: string }): JSX.Element => (
  <header>
    <div className={"bg-gray-800"}>
      <div
        className={classNames([
          "container",
          "mx-auto",
          "px-20",
          "grid",
          "grid-cols-11",
        ])}
      >
        <MenuLink title="Top" url="/" />
        <MenuLink notYet title="About" url="about" />
        <MenuLink notYet title="Other" url="other" />
      </div>
    </div>
    <div className={classNames(["hero", "bg-green-200"])}>
      <h1 className="title text-gray-800">{title}</h1>
      <p className="text-center text-gray-800 text-md py-5">
        ゆるく、アグレッシブにアウトプットします
      </p>
    </div>
  </header>
);

export default Header;
