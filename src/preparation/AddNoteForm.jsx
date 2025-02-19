import { useState } from "react";
import { addNote } from "./redux/actions";
import { useDispatch } from 'react-redux';
const  AddNoteForm =()=>{

    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim()&&content.trim()){
            dispatch(addNote({title,content}));
            setTitle("");
            setContent("");
        }
    }
    return (
        <div>
            <h1>ajouter un note</h1>
            <input 
            type="text" 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}/>
            <textarea
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            />
            <button onClick={handleSubmit}>Ajouter</button>
        </div>
    );
}
export default AddNoteForm;