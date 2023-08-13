import React,{useState} from 'react'
import classes from './create.module.css'
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import axios from  "axios"
import { useMutation, useQueryClient } from 'react-query'; // Import the necessary hook


const stripHtmlTags = (html) => {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
};

const Create = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState("")

  const queryClient = useQueryClient();

  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] }
      ],
      [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike", "blockquote",
    "list", "color", "bullet", "indent",
    "link", "image", "align", "size",
  ];

  const handleProcedureContentChange = (content) => {
    setValue(content)
  };


  const CreateMemory = async(e) => {
    e.preventDefault();
    const cleanedValue = stripHtmlTags(value);
    try {
      const res = await axios.post("http://localhost:5001/api/blog/", {
        title, 
        content: cleanedValue})
      console.log(res.data)
  } catch (error) {
      console.log(error)
  }
  };

  return (
    <div className={classes.container}>
      <h1>Create</h1>
     <div className={classes.editor}>
      <div className={classes.title}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
      </div>
        <div>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={value}
          placeholder="write your content ...."
          onChange={handleProcedureContentChange}
         
        />
        </div>
     </div>
     <button type="submit" onClick={CreateMemory}>Save Memory</button>

     <div>
      {title}
      {stripHtmlTags(value)}
     </div>
    </div>
  )
}

export default Create
