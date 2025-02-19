import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const NoteList = () => {
  const notes = useSelector((state) => state.notes || []); // Ajout d'une valeur par défaut

  return (
    <div>
      <h1>Note List</h1>
      {notes.length > 0 ? (
        <ul>
          {notes.map((note, index) => (
            <Note key={index} note={note} index={index} />
          ))}
        </ul>
      ) : (
        <p>Aucune note disponible.</p> // Message si la liste est vide
      )}
    </div>
  );
};

export default NoteList;
