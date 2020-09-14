import Copyright from "../atoms/Copyright";
import MenuLink from "../atoms/MenuLink";

const Footer = (): JSX.Element => (
  <footer className={"bg-gray-800"}>
    <div className="container mx-auto px-20">
      <div className="grid grid-cols-11">
        <MenuLink title="Top" url="/" />
        <MenuLink notYet title="About" url="about" />
        <MenuLink notYet title="Other" url="other" />
      </div>
      <hr />
      <Copyright />
    </div>
  </footer>
);

export default Footer;
