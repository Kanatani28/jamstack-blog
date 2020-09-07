import Copyright from "../atoms/Copyright";
import MenuLink from "../atoms/MenuLink";

const Footer = (): JSX.Element => (
  <footer className="bg-red-100">
    <div className="container mx-auto px-20">
      <div className="grid grid-cols-6">
        <MenuLink title="About" url="about" />
        <MenuLink title="Other" url="other" />
      </div>
      <hr />
      <Copyright />
    </div>
  </footer>
);

export default Footer;
