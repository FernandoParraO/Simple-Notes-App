const notes = require('./src/notes.js')
const yargs = require('yargs')

yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    title: {
      describe: 'Title for your note',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Body for your note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => notes.addNote(argv.title, argv.body),
})

yargs.command({
  command: 'remove',
  describe: 'Remove an existing note',
  builder: {
    title: {
      describe: 'Title of the note you want to remove',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => notes.removeNote(argv.title),
})

yargs.command({
  command: 'list',
  describe: 'List the notes',
  handler: () => notes.listNotes(),
})

yargs.parse()
