import React, { useEffect, useState } from 'react';
import classes from './home.module.css';
import Notes from '../../components/notes/Notes';
import axios from 'axios';

const Home = () => {
  const header = [
    {
      id: 1,
      title: 'Latest',
    },
    {
      id: 2,
      title: 'A week ago',
    },
    {
      id: 3,
      title: 'A month ago',
    },
  ];

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getAllPost = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/blog/');
        setNotes(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllPost();
  }, []);

  return (
    <div className={classes.home}>
      <div className={classes.titleDiv}>
        <h1 className={classes.title}>KEEP YOUR MEMORY ALIVE</h1>
      </div>
      <div className={classes.headerDiv}>
        {header.map((head) => (
          <button className={classes.button} key={head.id}>
            {head.title}
          </button>
        ))}
      </div>
      <div className={classes.notes}>
        {notes.map(({ _id, title, notes }) => (
          <Notes key={_id} title={title} summary={notes} />
        ))}
      </div>
    </div>
  );
};

export default Home;
