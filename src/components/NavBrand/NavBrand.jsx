import { Link } from "react-router-dom";

const NavBrand = () => {
  return (
    <Link to={"/"}>
      <h1 className="nav-brand">SAUCO</h1>
    </Link>
  );
};

export default NavBrand;
