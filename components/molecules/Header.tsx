import MenuLink from "../atoms/MenuLink";

const Header = ({ title }: { title: string }): JSX.Element => (
  <header>
    <div className="container mx-auto px-20 grid grid-cols-6">
      <MenuLink title="About" url="about" />
      <MenuLink title="Other" url="other" />
    </div>
    <div className="hero bg-red-100">
      <h1 className="title">{title}</h1>
      <p className="text-center text-teal-500 text-xl py-4">
        This is an Example.
      </p>
    </div>
  </header>
);

export default Header;
