const fs = require("fs");

const getNotes = function () {
  return "Hello World";
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(
    (note) => note.title === title || note.body === body
  );

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    //   console.log(notes);
    saveNotes(notes);
    console.log("Added new note");
  } else {
    console.log("Duplicate notes added, Please check title and body");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const databuffer = fs.readFileSync("notes.json");

    const dataJSON = databuffer.toString();

    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();

  const removeNote = notes.filter((note) => note.title !== title);
  if (notes.length > removeNote.length) {
    console.log("Note Removed");
    saveNotes(removeNote);
  } else {
    console.log("No note Found");
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(notes);
};

const readNotes = (title) => {
  const notes = loadNotes();

  const foundNote = notes.find((note) => note.title === title);

  if (foundNote) {
    console.log(`${title} is in the notes list`);
  } else {
    console.log(`Note not found: ${title}`);
  }
};

// readNotes("lucky");

const countofSavedNotes = () => {
  const notes = loadNotes();

  if (notes.length > 0) {
    console.log(`there are ${notes.length} notes saved`);
  } else {
    console.log(`there are ${notes.length} notes, empty buckets`);
  }
};

const removeAllNotes = () => {
  const notes = [];
  saveNotes(notes);
  console.log(`Remove all notes, there are ${notes.length} notes`);
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNote,
  removeNotes: removeNotes,
  countofSavedNotes: countofSavedNotes,
  removeAllNotes: removeAllNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
