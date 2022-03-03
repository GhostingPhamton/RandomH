import React from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Logo from "../../images/RamdonH.png";

const MainNavbar = ({}) => {
  return (
    <>
      <Navbar className="navbar-virgo">
        <Container>
          <Navbar.Brand>
            <Link to={`/#home`}>
              <img src={Logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Nav className="virgo-nav">
            <div className="row">
              <div className="col-sm">
                <Link className="virgo-nav-link" to={`/BlogList/`}>
                  Blogs
                </Link>
              </div>

              <div className="col-sm">
                <Link className="virgo-nav-link" to={`/DMCA/`}>
                  DMCA
                </Link>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
