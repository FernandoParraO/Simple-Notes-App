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

yargs.parse()
