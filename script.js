const inputField = document.querySelector('.todo-input');
const addTaskButton = document.querySelector('.add-task-btn');
const todoList = document.querySelector('.todo-list');

addTaskButton.addEventListener('click', () => {
  const taskText = inputField.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
      todoList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteBtn);
    todoList.appendChild(taskItem);

    inputField.value = '';
  }
});
