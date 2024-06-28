// import { useState } from "react";
import { Link } from "react-router-dom";
import thaparlogo from "../assets/TIET-Logo.png";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const styles = {
    navbar: {
      backgroundColor: "rgb(211 179 187)", // Royal blue
      color: "white", // Light text for contrast
      padding: "0.5rem 1.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    navbarBrand: {
      fontSize: "1.2rem", // Slightly larger font for brand name
      fontWeight: "bold", // Add boldness for emphasis
    },
    navLink: {
      textDecoration: "none",
      color: "inherit", // Inherit color from navbar
      marginRight: "1.5rem", // Spacing between links
      transition: "color 0.2s ease-in-out", // Smooth hover effect
    },
    navLinkActive: {
      color: "#2942C8", // Darker royal blue for active link
    },
    navBtn: {
      backgroundColor: "#EB370F", // Darker royal blue for button
      color: "white",
      padding: "0.75rem 1.5rem", // Adjust padding for button size
      borderRadius: "5px", // Rounded corners for aesthetics
      transition: "background-color 0.2s ease-in-out", // Smooth button hover effect
    },
    navBtnHover: {
      backgroundColor: "#3f5baf", // Slightly darker blue on hover
    },
  };

  return (
    <>
      {/* Your navigation bar JSX */}
      <nav style={styles.navbar}>
        {/* < href="#" className="navbar-brand" style={styles.navbarBrand}> */}
        <img
          src={thaparlogo}
          alt="logo"
          style={{ width: "500px", height: "70px" }}
        />

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className={nav-link ${styles.navLinkActive}} href="#">
              Home
            </a> */}
          </li>
          {/* Add more links here as needed */}
        </ul>
        <Link to="/" style={styles.navBtn}>
          Home
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
