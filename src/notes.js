const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('note added!'))
  } else {
    console.log(chalk.red.inverse('title already exist!'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse('Note Removed!'))
  } else {
    console.log(chalk.red.inverse('No note found'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  if (notes.length > 0) {
    console.log(chalk.inverse('Your notes:'))
    notes.forEach((note) => console.log(`${note.title}\n${note.body}\n`))
  } else {
    console.log(chalk.red.inverse('No notes found'))
  }
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('note not found'))
  }
}

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString())
  } catch (error) {
    return []
  }
}

const saveNotes = (notes) =>
  fs.writeFileSync('notes.json', JSON.stringify(notes))

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
}
