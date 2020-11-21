import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // Initial value for the ntes array is empty array
  const [notes, setNotes] = useState([]);

  // 1B Adding new noes to the array!
  // 1B Remember the newNote value is being passed from the setNote in the
  // 1B createArea.jsk
  function addNote(newNote) {
    // 1B Takes the previous valu of the notes array and adds to it.
    setNotes((prevNotes) => {
      //1B using the spread opertor to add to the arry at the end.
      //1B this becomes the new notes aray.
      return [...prevNotes, newNote];
    });
  }
  // 2A another function to delete a note
  function deleteNote(id) {
    //console.log("Delete was triggered");
    // 2bNow we want to remove the note from the results array
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* // 1C instead of this sample.  
      //      <Note key={1} title="Note title" content="Note content" /> */}
      {/* // Note all of this code below has to be in curly braces as JS */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
