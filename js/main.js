import NotesAPI from "./noteAPI.js";
import NotesView from "./notesView.js";

const app = document.getElementById("app");

const view = new NotesView(app, {
  onNoteAdd() {
    console.log("new note added");
  },
  onNoteEdit(newTitle, newBody) {
    console.log(newTitle, newBody);
  },
  onNoteSelect(noteId) {
    console.log(noteId);
  },
});

view.updateNoteList(NotesAPI.getAllNotes());
