import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [userName, setUserName] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({userName})
    }
  return (
    <div className='login'>
        <h2>Login</h2>
        <input 
        type="text"
        placeholder='Username'
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}/>
        <button
        onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login