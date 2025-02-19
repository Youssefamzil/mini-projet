import React from "react";
import { removeNote } from "./redux/actions";
import { useDispatch } from "react-redux";

const Note=()=>{
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeNote());
    }
    return (
        <div>
            <h2>Notes</h2>
            <button onClick={handleRemove}>Remove Note</button>

        </div>
    );
}
export default Note;