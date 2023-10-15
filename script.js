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
