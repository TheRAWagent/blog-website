import styled from "styled-components"
import { useNavigate } from "react-router"
import { useState } from "react"

function Login() {
  const Navigate = useNavigate()
  const [user, setUser] = useState<{ username: string, password: string }>({ username: '', password: '' })
  const [redirect,setRedirect]=useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const sendLoginRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/login`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...user
      },
    }).then((res: Response) => res.json()).then((data: { ok: boolean}) => {
      if (data.ok) {
        // console.log(data);
        // alert(JSON.stringify(data));
        // Navigate('/dashboard');
        setRedirect(true)
      } else {
        alert('Invalid Credentials');
      }
    }).catch((error: Error) => {
      console.error(error);
    });
  };
  if(redirect){
    Navigate('/');
  }
  return (


    <Wrapper>
      <h2 style={{ color: 'black' }}>Login</h2>
      <form action="" method="get">
        <label htmlFor="username">Username/Email</label>
        <input type="text" name="username" id="username" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={handleChange} />
        <button type="submit" onClick={sendLoginRequest}>Login</button>
        <button type="button" onClick={() => { Navigate('/register') }} >New User? Register</button>
      </form>
    </Wrapper>

  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 2rem;
  margin: 0 auto;
  background-color: #8a55a3;
  border-radius: 1rem;
  font-size: 2rem;
  color: white;
  font-weight: 500;
  form{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    label{
      
      font-size: 1.5rem;
    }
    input{
      
      font-size: 1.5rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid black;
    }
    button{
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid black;
      background-color: #5d5d5d;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`

export default Login