import Copyright from "../atoms/Copyright";
import MenuLink from "../atoms/MenuLink";
import { THEME_COLORS } from "../../lib/common";

const Footer = (): JSX.Element => (
  <footer className={`bg-${THEME_COLORS.menu}`}>
    <div className="container mx-auto px-20">
      <div className="grid grid-cols-11">
        <MenuLink title="Top" url="/" />
        <MenuLink title="About" url="about" />
        <MenuLink title="Other" url="other" />
      </div>
      <hr />
      <Copyright />
    </div>
  </footer>
);

export default Footer;
