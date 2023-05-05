import { Container, Nav, Navbar } from 'react-bootstrap';
import { IoIosContact } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './NavBar.css';
import UserInfo from './UserInfo/UserInfo';

export default function NavBar() {
  const { user, logOut } = useAuth();

  console.log();

  return (
    <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            FOODBUZZ
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blogs">
                Blog
              </Nav.Link>
            </Nav>
            <Nav>
              {user.displayName ? (
                <UserInfo
                  logOut={logOut}
                  img={user.photoURL}
                  name={user.displayName}
                  userIcon={<IoIosContact size="25px" />}
                />
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  <IoIosContact size="25px" /> login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
