import NotesAPI from "./noteAPI.js";
import NotesView from "./notesView.js";

const app = document.getElementById("app");

const view = new NotesView(app,{
  onNoteAdd(){
    console.log("new note added");
  }
});
