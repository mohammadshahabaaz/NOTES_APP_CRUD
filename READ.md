Note-Taking App
A simple CLI-based note-taking application that allows you to create, read, update, and delete notes efficiently using Node.js and Yargs.

Features
Create new notes with a title and body.
Read existing notes by title.
Update notes by title.
Delete notes by title.
Installation
Clone the repository:
bash
Copy code
git clone https://yourrepositorylink.git
Navigate into the application directory:
bash
Copy code
cd note-app
Install the necessary dependencies:
bash
Copy code
npm install
Usage
Adding a New Note
bash
Copy code
node app.js add --title="Note Title" --body="Note Body"
Reading a Note
bash
Copy code
node app.js read --title="Note Title"
Updating a Note
bash
Copy code
node app.js update --title="Note Title" --newTitle="New Title" --body="Updated Note Body"
Deleting a Note
bash
Copy code
node app.js remove --title="Note Title"
Listing All Notes
bash
Copy code
node app.js list
Configuration
The application uses Yargs for parsing command-line arguments. Ensure that your Yargs configuration in app.js matches the commands and options described in the Usage section.

Dependencies
Node.js
Yargs