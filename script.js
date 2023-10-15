// script.js
const noteForm = document.getElementById('note-form');
const noteList = document.getElementById('note-list');

noteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    if (title.trim() === '' || content.trim() === '') {
        alert('Please fill in both title and content.');
        return;
    }

    const noteItem = document.createElement('li');
    noteItem.innerHTML = `<strong>${title}:</strong> ${content}`;

    noteList.appendChild(noteItem);
    noteForm.reset();
});

// Function to fetch and display notes
function fetchAndDisplayNotes() {
    fetch('/notes')
        .then((response) => response.json())
        .then((data) => {
            noteList.innerHTML = '';
            data.forEach((note) => {
                const noteItem = document.createElement('li');
                noteItem.innerHTML = `<strong>${note.title}:</strong> ${note.content}`;
                noteList.appendChild(noteItem);
            });
        })
        .catch((error) => {
            console.error(error);
        });
}

// Initial fetch to display existing notes
fetchAndDisplayNotes();

// Add a submit event listener to refresh notes after adding one
noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // ... (your existing code to add a new note)
    // After adding a note, refresh the note list
    fetchAndDisplayNotes();
});