import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.- !!! addNote received the note
// 1B- Add new note to an array.
// 1C- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//2A- Callback from the Note component to trigger a delete function.
//2B- Use the filter function to filter out the item that needs deletion.
//2C- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
