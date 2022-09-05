import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/image/logo.png";

/**
 * @name Header
 * @description create header component with a logo and 2 links to navigate to create employee form page and employee list page
 * @returns {JSX.Element}
 *
 */

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      textUnderlineOffset: "5px",
    };
  };

  return (
    <header className="header">
      <section className="container">
        <div className="header-container">
          <NavLink to="/" className="no-decoration">
            <img src={logo} alt="logo" />
            <h1 className="hearder-text">
              <span className="bigger-police">W</span>EALTH
              <span className="bigger-police">H</span>EALTH
            </h1>
          </NavLink>
          <h2 className="header-tm"> HRnet</h2>
          <div className="header-links">
            <NavLink to="/" style={navLinkStyles}>
              Create Employee
            </NavLink>
            <NavLink to="/list" style={navLinkStyles}>
              List Employee
            </NavLink>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
