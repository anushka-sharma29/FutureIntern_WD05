const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingTasks = document.getElementById('pendingTasks');
const completedTasks = document.getElementById('completedTasks');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span>
                    <button class="completeBtn">Complete</button>
                    <button class="editBtn">Edit</button>
                    <button class="deleteBtn">Delete</button>`;
    
    pendingTasks.appendChild(li);
    taskInput.value = '';

    li.querySelector('.completeBtn').addEventListener('click', () => completeTask(li));
    li.querySelector('.deleteBtn').addEventListener('click', () => deleteTask(li));
    li.querySelector('.editBtn').addEventListener('click', () => editTask(li));
}

function completeTask(li) {
    li.querySelector('.completeBtn').remove();
    pendingTasks.removeChild(li);
    completedTasks.appendChild(li);
    li.classList.add('completed');
}

function deleteTask(li) {
    if (li.parentNode === pendingTasks) {
        pendingTasks.removeChild(li);
    } else {
        completedTasks.removeChild(li);
    }
}

function editTask(li) {
    const taskText = li.querySelector('span').innerText;
    taskInput.value = taskText;
    deleteTask(li);
}
