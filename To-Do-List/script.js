const newToDo = document.getElementById("newToDo");
const addToDo = document.getElementById("addToDO");
const ToDoList = document.getElementById("ToDoList");


addToDo.addEventListener("click", ()=>{
    const newToDoText = newToDo.value;

    if(newToDo !== ""){
        const newToDoItem = document.createElement("li");

        newToDoItem.innerText = newToDoText;

        const delToDo = document.createElement("button");
        delToDo.innerText = "X";

        delToDo.classList.add("delTask")
        delToDo.addEventListener("click", function () {
            newToDoItem.remove();
        });
        
        newToDoItem.appendChild(delToDo);
        ToDoList.appendChild(newToDoItem);
        newToDo.value="";

        

    }
}) 