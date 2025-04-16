const todoContainer = document.getElementById('todo');
const todoTitle = document.getElementById('todo-title');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('new-task');
const totalTasks = document.getElementById('total-tasks');
let currentCategory = '';

const todos = {
  'Personal': [],
  'Work': [],
  'Shopping': [],
  'Coding': [],
  'Health': []
};

function openTodo(category) {
  currentCategory = category;
  todoTitle.textContent = category + ' To-Do';
  document.querySelector('.section-list').style.display = 'none';
  todoContainer.classList.add('active');
  renderTasks();
}

function goBack() {
  todoContainer.classList.remove('active');
  document.querySelector('.section-list').style.display = 'flex';
  taskInput.value = '';
}

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && taskInput.value.trim() !== '') {
    todos[currentCategory].push({
      text: taskInput.value.trim(),
      done: false
    });
    taskInput.value = '';
    renderTasks();
    updateCounts();
  }
});

function renderTasks() {
  taskList.innerHTML = '';
  todos[currentCategory].forEach((task, index) => {
    const li = document.createElement('li');

    const label = document.createElement('label');
    label.className = 'task-label';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.onchange = () => {
      todos[currentCategory][index].done = checkbox.checked;
      renderTasks();
    };

    const span = document.createElement('span');
    span.textContent = task.text;
    span.className = task.done ? 'done' : 'not-done';

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'X';
    removeBtn.onclick = () => {
      if (confirm('Are you sure you want to delete this task?')) {
        todos[currentCategory] = todos[currentCategory].filter((_, i) =>
            i !== index);
        renderTasks();
        updateCounts();
      }
    };

    label.appendChild(checkbox);
    label.appendChild(span);
    li.appendChild(label);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}

function updateCounts() {
  let total = 0;
  Object.entries(todos).forEach(([category, taskArray]) => {
    document.getElementById('count-' + category).textContent = `${taskArray.length} Tasks`;
    total += taskArray.length;
  });
  totalTasks.textContent = `Today you have ${total} tasks`;
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('dark-mode-btn');
  btn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
}

updateCounts();