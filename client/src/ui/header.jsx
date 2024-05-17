import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import auth from "../utils/auth";

export default function HeaderNav() {
  const isLoggedIn = auth.loggedIn();

  return (
    <>
      <Navbar expand="md" className="header-nav sticky-top w-100 mb-4">
        <Container>
          <Navbar.Brand href="/" className="text-color">
            Reel Roulette
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar`}
            aria-labelledby={`offcanvasNavbarLabel`}
            placement="end"
            className="offcanvas-background">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel`}
                className="custom-offcanvas-header">
                Reel Roulette
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-body-align">
              <Nav>
                {isLoggedIn ? (
                  <Nav.Link href="/user" className="text-color">
                    Movie
                  </Nav.Link>
                ) : (
                  <Nav.Link href="/movie" className="text-color">
                    Movie
                  </Nav.Link>
                )}
                {isLoggedIn ? (
                  <Nav.Link href="/user" className="text-color">
                    User
                  </Nav.Link>
                ) : (
                  <Nav.Link href="/user" className="text-color">
                    User
                  </Nav.Link>
                )}
                {isLoggedIn ? (
                  <Nav.Link
                    className="text-color"
                    href="/logout"
                    onClick={() => auth.logout()}>
                    Logout
                  </Nav.Link>
                ) : (
                  <Nav.Link href="/" className="text-color">
                    Login / Sign Up
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
