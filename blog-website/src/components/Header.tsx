import { useContext, useEffect} from "react";
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { UserContext } from "../UseContext";

function Header() {
    const {userInfo,setUserInfo}=useContext(UserContext)
    useEffect(()=>{
  fetch('http://localhost:3000/api/profile', {
    method: 'GET',
    credentials: 'include',
  }).then((res: Response) => res.json()).then((data: any) => {
    
    if (data.username) {
      setUserInfo(data)
    }
  }).catch((error: Error) => {
    console.error(error);
  });
    },[])

    const logout=()=>{
      fetch('http://localhost:3000/api/logout',{
        method:'GET',
        credentials:'include'
      })
      .then((res: Response) => res.json())
      .then((data: { message: string }) => {
        setUserInfo({})
      })
    }
    return (
        <Heeader>
            <Logo to='/' className="logo">My Blog</Logo>
            {(userInfo.username)?
            (
              <Nav>
                <Link to='/'>{userInfo.username}</Link>
                <Link to="">Create new Post</Link>
                <Link onClick={logout} to={""}>Logout</Link>
              </Nav>
            ):
            (
              <Nav>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </Nav>
            )}
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