import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <nav
      className={scroll ? `${styles.navColor}` : `${styles.navbar}`}
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "10",
      }}
    >
      <div className={styles.menuIcon} onClick={handleClick}>
        {click ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className={styles.navbar}>
        <ul
          className={!click ? `${styles.nav__menu}` : `${styles.nav__active}`}
        >
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              to="Home"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="About"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="projects"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              to="Skill"
              onClick={closeMobileMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              to="Contact"
              onClick={closeMobileMenu}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
