import NavLinks from "./NavLinks/NavLinks";

import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLinks />
      <MobileNav />
    </div>
  );
};

export default Navbar;
