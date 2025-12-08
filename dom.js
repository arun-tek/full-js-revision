// Function to add a new day
function addDay() {
    const dayName = prompt("Enter the name of the new day:");
    if (dayName) {
        const ul = document.getElementById('days');
        const li = document.createElement('li');
        li.className = 'day';
        li.textContent = dayName;

        // Add edit and delete buttons for this li
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editDay(li);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteDay(li);

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    }
}

// Function to edit a day
function editDay(li) {
    const newName = prompt("Enter the new name for the day:", li.textContent.split('Edit')[0].trim());
    if (newName) {
        li.firstChild.textContent = newName + ' ';
    }
}

// Function to delete a day
function deleteDay(li) {
    if (confirm("Are you sure you want to delete this day?")) {
        li.remove();
    }
}

// Initialize buttons on page load
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addBtn');
    addBtn.onclick = addDay;

    // Add edit and delete buttons to existing days
    const days = document.querySelectorAll('.day');
    days.forEach(day => {
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editDay(day);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteDay(day);

        day.appendChild(editBtn);
        day.appendChild(deleteBtn);
    });
});
