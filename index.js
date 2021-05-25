const todoform = document.querySelector("#todoform");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("todoList");
const pendingList = document.querySelector("#pendingList");
const ls = windows.localStorage;
let id = 0;

const db;

function submitHandler(event){
    event.preventDefault();
    const todo = todoInput.value;
    addTodoList(todo);
    todoInput.value = "";
}

function deleteElement(event){
    const target = event.target.parentElement;
    todoList.removeChild(target);
}

function addPendingList(event){
    const target = event.targt;
    const word = target.childNodes[0],innerText);
    deleteElement(event);
    addPendingList(word);
}

function moveToPending(event){
    const target = event.target.parentElement;
    const word = targt.childNodes[0].innerText;
    deleteTodoElement(event);
    addPendingList(word);
}
function moveTodo(event){
    const target = event.target.parentElement;
    const word = targt.childNodes[0].innerText;
    deletePendingElement(event);
    addTodoList(word);
}

function addPendingList(word){
    const li = document.createElement("li");
    const text = document.createElement("span");
    text.innerText = word;
    const delBtn = document.createElement("button");
    delbtn.innerText = "";
    delBtn.addEventlistener("click", deletePendingElement);
    const penBtn = document.createElement("button");
    penBtn.innerText = "";
    penBtn.addEventlistener("click",moveToPending);
    li.appendChild(text);
    li.appendChild(penBtn);
    li.appendChild(delBtn);
    pendingList.appendChild(li);
}

function addTodoList(word){
    const li = document.createElement("li");
    const text = document.createElement("span");
    text.innerText = word;
    const delBtn = document.createElement("button");
    delbtn.innertext = "";
    delBtn.addEventlistener("click", deleteElement);
    const penBtn = document.createElement("button");
    penBtn.innertext = "";
    penBtn.addEventlistener("click",addPendingList);
    li.appendChild(text);
    li.appendChild(penBtn);
    li.appendChild(delBtn);
    todoList.appendChild(li);

    const object = {
        id,
        word,
    };
    id++;
    db.push(object);
    console.log(db);
    saveLs();
}

function saveLs(){
    ls.setItem("todos", JSON.stringify(db));
}

function loadLs(){
    todos = JSON.parse(ls.getItem("todos"));
    todos.forEach(todo => {
        addTodoList(todo.word);
    });
}

function init(){
    loadLs();
    todoForm.addEventlistener("submit", submitHandler);
}

init();