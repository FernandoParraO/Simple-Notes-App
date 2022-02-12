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
}
