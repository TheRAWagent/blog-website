import { styled } from "styled-components"
import Header from "./components/Header"
import { Outlet } from "react-router"


function Layout() {
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