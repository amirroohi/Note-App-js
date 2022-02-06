const notes = [
  {
    id: 1,
    title: "first",
    body: "this is first note",
    updated: '2022-02-05T21:35:02.154Z',
  },
  {
    id: 2,
    title: "second",
    body: "this is second note",
    updated: '2022-02-05T21:33:54.897Z',
  },
  {
    id: 3,
    title: "third",
    body: "this is third note",
    updated: '2022-02-05T21:34:29.634Z',
  },
];

class notesAPI {
  static getAllNotes() {
    const savedNotes = notes || [];
    return savedNotes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  saveNotes() {}
  deleteNote() {}
}
