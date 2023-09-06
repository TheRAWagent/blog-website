import { useState } from "react"
import { useNavigate } from "react-router"
import { styled } from "styled-components"

function Register() {
  const Navigate=useNavigate()
  const [username,setUsername]=useState<string>('')
  const [email,setEmail]=useState<string>('')
  const [password,setPassword]=useState<string>('')
  const [confirmPassword,setConfirmPassword]=useState<string>('')
  const RegisterUser=(event: any)=>{
    event.preventDefault()
    if(password===confirmPassword)
      {
        fetch('http://localhost:3000/api/login',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: username,
              email: email,
              password: password
            })
        }).then((res: Response)=>{
          return res.json()
        }).then((data: {ok: boolean})=>{
          if(data.ok){
            alert('User Registered')
            Navigate('/login')
          }
          else{
            alert('User already exists')
          }
        })
        .catch(err=>console.log(err))
      }
      else{
        alert('Passwords do not match')
      }
  }
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    switch(e.target.name){
      case 'username':
        setUsername(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      case 'confirmPassword':
        setConfirmPassword(e.target.value)
        break
    }
  }

  return (
    <Wrapper>
    <h2 style={{color: 'black'}}>Register</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={username} id="username" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} id="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={password} id="password" onChange={handleChange} />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" name="confirmPassword" value={confirmPassword} id="password" onChange={handleChange} />
        <div style={{display: 'flex',gap: '20px'}}>
        <button type="submit" onClick={RegisterUser}>Register</button>
        <button type="button" onClick={()=>{Navigate('/login')}}>Existing User?</button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper=styled.div`
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

export default Register