const fs = require('fs')

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes)
    console.log('note added!')
  } else {
    console.log('title already exist!')
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
