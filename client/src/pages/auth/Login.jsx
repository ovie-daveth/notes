import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async(e) => {
        e.preventDefault()
        console.log(email,password)
        try {
            const res = await axios.post("http://localhost:5001/api/users/login", 
            {email, password}
            )
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <form action="">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>login</button>
      </form>
    </div>
  )
}

export default Login
