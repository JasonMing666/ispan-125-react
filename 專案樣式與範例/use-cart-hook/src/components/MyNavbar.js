import { Navbar, Nav } from 'react-bootstrap'

// 選單連結要使用NavLink取代Link
import { NavLink, Link } from 'react-router-dom'

import CartIcon from './CartIcon'

function MyNavbar(props) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand as={Link} to="/">
          React測試站
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* 把Nav.Link作為NavLink來使用 */}
            {/* 一定要加上exact，不然首頁會一直點亮(active) */}
            <Nav.Link as={NavLink} to="/product-list" exact>
              產品列表
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
              購物車
            </Nav.Link>
            <CartIcon />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNavbar
