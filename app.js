const yargs = require("yargs");
const notes = require("./notes");

// console.log(notes.getNotes());

// console.log(process.argv);

yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    // console.log("Adding a new Note", argv);
    // console.log("Title: " + argv.title);
    // console.log("Body: " + argv.body);
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  description: "remove a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    // console.log("Removing a new Note");
    notes.removeNotes(argv.title);
  },
});
yargs.command({
  command: "read",
  description: "read a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    // console.log("Reading a new Note");
    notes.readNotes(argv.title);
  },
});

yargs.command({
  command: "list",
  description: "list a new note",
  handler: () => {
    // console.log("Listing a new Note");
    notes.listNotes();
  },
});

yargs.command({
  command: "count",
  description: "Count the number of notes",
  handler: () => {
    // console.log("Number of counting notes");
    notes.countofSavedNotes();
  },
});

yargs.command({
  command: "removeAll",
  description: "Remove all notes",
  handler: () => {
    // console.log("Number of counting notes");
    notes.removeAllNotes();
  },
});

yargs.parse();

// console.log(yargs.argv);
