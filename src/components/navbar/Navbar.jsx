import { Link } from "react-scroll";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <ul className="menu-bar">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70} // Adjust this value based on your navbar height
            activeClass="active"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
