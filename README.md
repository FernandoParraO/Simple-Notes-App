# Simple-Notes-App

This is a Simple Notes App with NodeJS that works locally on the command line.
The purpose of this app was to practice the basics of NodeJS using ES6, file system, yargs and chalk.
It allows to add, read, list and remove notes with title and body, and it store the notes in a notes.json file that'll be generated in the root of the project.

# Requirements

NodeJS

# Installation

Clone the repository.

`git clone https://github.com/FernandoParraO/Simple-Notes-App.git`

On the root of the project, run

`npm install`

Now you can try some commands from the usage section.

# Usage

## Help

To get a list of the available commands, run:

`node app.js --help`

## Adding a note:

This application store notes with title and body, you cannot have notes with the same title.

`node app.js add --title="Your Note Title" --body="Your Note Body"`

## Reading a note:

You can access a note details giving the title.

`node app.js read --title="Your Note Title"`

## Listing all the notes:

You can list all existing notes using this command.

`node app.js list`

## Removing a note:

You can remove a note using the title of the note.

`node app.js remove --title="Your Note Title"`
