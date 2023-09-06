import { styled } from "styled-components"
import Header from "./components/Header"
import { Outlet } from "react-router"


function Layout() {
  fetch('http://localhost:3000/api/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then((res: Response) => {
    return res.json()
  }).then((data: { ok: boolean }) => {
    if (data.ok) {
      console.log(data);
    }
    else {
      console.log('Not logged in');
    }
  }).catch(err => console.log(err))
  return (
    <Main>
        <Header/>
        <Outlet/>
    </Main>
  )
}

const Main = styled.main`
  padding: 10px;
  margin: 0 auto;
  max-width: 800px;
`

export default Layout