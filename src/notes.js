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

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString())
  } catch (error) {
    return []
  }
}

const saveNotes = function (notes) {
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

module.exports = {
  addNote,
  removeNote,
}
