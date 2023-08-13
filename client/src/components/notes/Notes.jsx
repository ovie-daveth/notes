import React, { useEffect } from 'react'
import classes from './note.module.css'

const Notes = ({author,summary,date,title}) => {

 
  return (
    <div className={classes.notecont}>
     <h1>{title}</h1>
        <p>{summary}</p>
        <div className={classes.span}>
            <span>{date}</span>
            <span>{author}</span>
        </div>
    </div>
  )
}

export default Notes
