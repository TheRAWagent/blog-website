import { Link } from "react-router-dom"
import { styled } from "styled-components"

function Header() {
    return (
        <Heeader>
            <Logo to='/' className="logo">My Blog</Logo>
            <Nav>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </Nav>
        </Heeader>
    )
}

const Heeader = styled.header`
    display: flex;
  justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  margin-bottom: 50px;
  & a{
    text-decoration: none;
    color: inherit;
  }
`

const Logo = styled(Link)`
    font-size: xx-large;
    font-weight: bold;
`

const Nav = styled.nav`
    display: flex;
    gap: 15px;
`

export default Header