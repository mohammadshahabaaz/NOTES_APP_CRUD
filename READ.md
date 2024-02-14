# Note-Taking App

A simple CLI-based note-taking application that allows you to create, read, update, and delete notes efficiently using Node.js and Yargs.

## Features

- **Create** new notes with a title and body.
- **Read** existing notes by title.
- **Update** notes by title.
- **Delete** notes by title.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohammadshahabaaz/NOTES_APP_CRUD.git

# Navigate into the application directory:
bash
cd note-app

# Install the necessary dependencies:
bash
npm install


Usage : 
- **Adding a New Note**
node app.js add --title="Note Title" --body="Note Body"

- **Reading a Note**
node app.js read --title="Note Title"

- **Updating a Note**
node app.js update --title="Note Title" --newTitle="New Title" --body="Updated Note Body"

- **Deleting a Note**
node app.js remove --title="Note Title"

- **Listing All Notes**
node app.js list

# Configuration
The application uses Yargs for parsing command-line arguments. Ensure that your Yargs configuration in app.js matches the commands and options described in the Usage section.

# Dependencies
Node.js
Yargs