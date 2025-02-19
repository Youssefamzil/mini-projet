import React from "react";
import AddNoteForm from "./AddNoteForm";
import NoteList from "./NoteList";
const App =()=>{
    return(
        <div>
            <h1>Application Notes</h1>
            <AddNoteForm/>
            <NoteList/>
        </div>
        );

}
export default App;