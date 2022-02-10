export default class NotesView {
  constructor(root, handler) {
    const { onNoteAdd, onNoteEdit, onNoteSelect, onNoteDelete } = handler;
    this.root = root;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteSelect = onNoteSelect;
    this.root.innerHTML = `
        <div class="notes__sidebar">
          <div class="notes__logo">NOTE APP</div>
          <div class="notes__list">
          <div class="notes__list-item"></div>
        </div>
          <button class="notes__add">ADD NOTE</button>
        </div>
        <div class="notes__preview">
          <input type="text" class="notes__title" placeholder="note title ..." />
          <textarea name="" class="notes__body">Take some note</textarea>
        </div>
        `;

    const addNoteBtn = this.root.querySelector(".notes__add");
    const inputTitle = this.root.querySelector(".notes__title");
    const inputBody = this.root.querySelector(".notes__body");

    addNoteBtn.addEventListener("click", () => {
      this.onNoteAdd();
    });

    [inputBody, inputTitle].forEach((inputField) => {
      inputField.addEventListener("blur", () => {
        const newBody = inputBody.value.trim();
        const newTitle = inputTitle.value.trim();
        this.onNoteEdit(newTitle, newBody);
      });
    });
  }

  _creatListItemHTML(id, title, body, updated) {
    const MAX_BODY_LENGTH = 50;
    return `
    <div class="notes__list-item" data-note-id="${id}">
    <div class="notes__small-title">${title}</div>
    <div class="notes__samall-body">
    ${body.substring(0, MAX_BODY_LENGTH)}
    ${body.length > MAX_BODY_LENGTH ? "..." : ""}
    </div>
    <div class="notes__small-updated">
    ${new Date(updated).toLocaleString(undefined, {
      dateStyle: "full",
      timeStyle: "short",
    })}
     </div>
  </div>

    `;
  }

  updateNoteList(notes) {
    const notesContainer = this.root.querySelector(".notes__list");
    // empty notes list
    notesContainer.innerHTML = "";
    let notesList = "";
    for (const note of notes) {
      const { id, title, body, updated } = note;
      const HTML = this._creatListItemHTML(id, title, body, updated);
      notesList += HTML;
    }
    notesContainer.innerHTML = notesList;
    notesContainer.querySelectorAll(".notes__list-item").forEach((noteItem) => {
      noteItem.addEventListener("click", () => {
        this.onNoteSelect(noteItem.dataset.noteId);
      });
    });
  }
}
