import React, { useState } from 'react'
import classes from "./navbar.module.css"

const Navbar = () => {
const [login, setlogin] = useState(false)
  return (
    <div className={classes.navbarcontainer}>
      <div className={classes.logo}>
         <a className="" href="/" > N</a>
      </div>
      <div className={classes.navbar}>
         {
          login ? (
            <>
              <button>Logout</button>
              <a href="/create">Create</a>
            </>
          ) : (
            <>
              <a href="/login">Login</a>
              <a href="">Register</a>
            </>
          )
         }
      </div>
    </div>
  )
}

export default Navbar
