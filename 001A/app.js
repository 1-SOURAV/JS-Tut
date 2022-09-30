//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//Fuctions
function addTodo(){
    //Prevent Form from submitting
    event.preventDefault();

    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);

    //Complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas - fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas - fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append all to list
    todoList.appendChild(todoDiv);

    //Clearing Todo input
    todoInput.value = "";
}

function deleteCheck(e){
    console.log(e.target);
    const item = e.target;
 
    //Delete Todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove(); 
        });
    }

    //Check Mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}