/*  ARRAY TO STORE TASKS  */

var tasks = [];

/*  ADD TASK   */

function addTask() {

  var input = document.getElementById("todoInput");

  var taskText = input.value.trim();

  // Prevent empty task
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create task object
  var task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  // Add into array
  tasks.push(task);

  // Clear input
  input.value = "";

  // Refresh UI
  renderTasks();
}


/*  DISPLAY TASKS   */

function renderTasks() {

  var todoList = document.getElementById("todoList");

  var html = "";

  tasks.forEach(function(task) {

    html += `
      <li class="todo-item">

        <span class="${task.completed ? 'completed' : ''}">
          ${task.text}
        </span>

        <div class="task-buttons">

          <button
            class="complete-btn"
            onclick="toggleTask(${task.id})"
          >
            ${task.completed ? 'Undo' : 'Done'}
          </button>

          <button
            class="delete-btn"
            onclick="deleteTask(${task.id})"
          >
            Delete
          </button>

        </div>

      </li>
    `;
  });

  todoList.innerHTML = html;
}


/*  COMPLETE / UNDO TASK   */

function toggleTask(id) {

  tasks.forEach(function(task) {

    if (task.id === id) {
      task.completed = !task.completed;
    }

  });

  renderTasks();
}


/*  DELETE TASK   */

function deleteTask(id) {

  tasks = tasks.filter(function(task) {
    return task.id !== id;
  });

  renderTasks();
}
