const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.onclick = () => {
        taskList.removeChild(li);
    };

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Concluir';
    completeButton.onclick = () => {
        li.classList.toggle('completed');
    };

    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    taskList.appendChild(li);

    taskInput.value = '';
}