const todoform = document.querySelector("#todoform");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("todoList");
const pendingList = document.querySelector("#pendingList");
const ls = windows.localStorage;
let id = 0;

const tododb = [];
const pendb = [];

function submitHandler(event){
    event.preventDefault();
    const todo = todoInput.value;
    addTodoList(todo);
    todoInput.value = "";
}

function deleteElement(event){
    const target = event.target.parentElement;
    const id = target.id;
    db.splice(db.indexOf(id), 1);
    saveLs();
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
    li.id = id;
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
    li.id = id;
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
    tododb.push(object);
    console.log(tododb);
    saveLs();
}

function saveLs(){
    ls.setItem("todos", JSON.stringify(tododb));
    ls.setItem("pendings", JSON.stringify(pendingdb));
}

function loadLs(){
    todos = JSON.parse(ls.getItem("todos"));
    if(todos){
        todos.forEach((todo) => {
            addTodoList(todo.word);
        });
    }
    pendings = JSON.parse(ls.getItem("pendings"));
    if(pendings){
        pendings.forEach((pending) => {
            addTodoList(pending.word);
        });
    }
}

function init(){
    loadLs();
    todoForm.addEventlistener("submit", submitHandler);
}

init();