import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'




function Navbarcomps() {

  return (
    
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            <Nav.Link href="/">Kategória</Nav.Link>
            <Nav.Link href="/uj">Új kategória</Nav.Link>
            <Nav.Link href="/">Galvács Máté</Nav.Link>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
export default Navbarcomps;