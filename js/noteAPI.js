const notes = [
    {
      id: 1,
      title: "first",
      body: "this is first note",
      updated: "2022-02-05T21:35:02.154Z",
    },
    {
      id: 2,
      title: "second",
      body: "this is second note",
      updated: "2022-02-05T21:33:54.897Z",
    },
    {
      id: 3,
      title: "third",
      body: "this is third note",
      updated: "2022-02-05T21:34:29.634Z",
    },
  ];
  
  export default class NotesAPI {
    static getAllNotes() {
      // get saved notes from localStorage
      const savedNotes = JSON.parse(localStorage.getItem("notes-app")) || [];
      // sort by newest date
      return savedNotes.sort((a, b) => {
        return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
      });
    }
  
    static saveNote(noteToSave) {
      // get notes from localStorage
      const notes = NotesAPI.getAllNotes();
      // 1. existed or 2. not
      const existedNote = notes.find((n) => n.id == noteToSave.id);
      if (existedNote) {
        // 1
        existedNote.title = noteToSave.title;
        existedNote.body = noteToSave.body;
        existedNote.updated = new Date().toISOString();
      } else {
        // 2
        noteToSave.id = new Date().getTime();
        noteToSave.updated = new Date().toISOString();
        notes.push(noteToSave);
      }
      localStorage.setItem("notes-app", JSON.stringify(notes));
    }
    // delete from existed notes
    static deleteNote(id) {
      const notes = NotesAPI.getAllNotes();
      const filteredNotes = notes.filter((n) => n.id != id); // 1!== 2, 3!==2
      localStorage.setItem("notes-app", JSON.stringify(filteredNotes));
    }
  }
  console.log(NotesAPI.getAllNotes());
  