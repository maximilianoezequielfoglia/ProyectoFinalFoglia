import NavBrand from "../NavBrand/NavBrand";
import NavMenu from "../NavMenu/NavMenu";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <NavBrand />
      <NavMenu />
      <CartWidget />
    </nav>
  );
};

export default NavBar;
