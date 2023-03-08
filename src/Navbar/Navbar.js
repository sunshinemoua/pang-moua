import NavLinks from "./NavLinks/NavLinks";
import MobileNav from "./MobileNav/MobileNav";

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLinks />
      <MobileNav />
    </div>
  );
};

export default NavBar;
