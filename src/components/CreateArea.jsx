import React, { useState } from "react";
// step 1b added {useState}...

function CreateArea(props) {
  ////// step 1a.. creating statefull constants!
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  // step 1e Add the event to handlechange input
  function handleChange(event) {
    // step 1f creat a destructured variable
    const { name, value } = event.target;
    // now we can use the separate values as constants.
    // step 1g . use setNote
    setNote((prevNote) => {
      return {
        // step 1h using the spread operator that to add this value to
        // set/array of values.
        ...prevNote,
        // step 1h This syntax changes this from the string value
        // name to the actual value of the parameter i.e. content or
        // title
        ///** This compltes the first step... */
        [name]: value
      };
    });
  }
  // ...Step 1j Added function to catch the onClick
  function submitNote(event) {
    // From Step 1k - passing note bakc to App
    // this is equivalnet to call addNote from App.jsk
    // This is thhe current created note..
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    // Note: this is preventing the form from being refreshed to default
    event.preventDefault();
  }
  return (
    <div>
      <form>
        {/* // Step 1c...added value to both titel and content */}
        {/* Step 1d... Add the onChange and call the handleChange function */}
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        {/* // Step 1i Adding onClick to Add button */}
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
