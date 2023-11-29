import { useState } from "react";
import NavAll from "../NavAll/NavAll";
import NavTop from "../NavTop/NavTop";
import NavBottom from "../NavBottom/NavBottom";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavAll />
        <NavTop />
        <NavBottom />
      </div>
      <div
        className={`nav-menu ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default NavMenu;
