let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];


function populateTodoList() {
  let list = document.getElementById("todo-list");
  const toEmpty = document.querySelectorAll('.added');
  toEmpty.forEach(li => li.remove());
  
  todos.forEach((todo) => {
    const listToDo = document.createElement('li');
    listToDo.classList.add('added');
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "✅"
    completeBtn.classList.add('complete');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add('delete');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = todo.task;

    listToDo.appendChild(taskSpan);
    listToDo.appendChild(completeBtn);
    listToDo.appendChild(deleteBtn);
    list.appendChild(listToDo);

    completeBtn.addEventListener('click', () => {
      taskSpan.classList.add('done');
    })

    deleteBtn.addEventListener('click', () => {
      listToDo.remove();
      todos = todos.filter(todo => todo.task !== taskSpan.textContent);
    })
  })
}



document.getElementById('add-todo').addEventListener('click', (e) => {
  e.preventDefault();
  const inputText = document.getElementById('input-text');
  const value = inputText.value;
  const state = false;
  if(value !== ""){
    todos.push({task: value, completed: state});
  }
  inputText.value = "";
  populateTodoList();
})

document.getElementById('remove-all-completed').addEventListener('click', () => {
  const allComplete = document.querySelectorAll('.done');
  allComplete.forEach(span => {
    const li = span.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.task !== span.textContent);
  })
})

populateTodoList();