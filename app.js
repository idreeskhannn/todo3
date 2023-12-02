let addBtn = document.getElementById("addBtn");
let saveBtn = document.getElementById("saveBtn");
let todoList = document.getElementById("todoList");
let deleteAllBtn = document.getElementById("deleteAllBtn");
let editedLI = null;
let editol= document.getElementById("editOl")
let editVal=document.getElementById("editVal")

saveBtn.style.display = "none";
deleteAllBtn.style.display = "none";
editol.style.display="none"

function addTodo() {
  let todoInput = document.getElementById("todoInput");
  let todoInputValue = todoInput.value;

  if (todoInputValue.trim()) {
    //   Creating LI tag
    let createLi = document.createElement("li");

    createLi.innerText = todoInputValue;

    //   Edit Button add in LI
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    createLi.appendChild(editBtn);
    editBtn.setAttribute("class", "bg-red");

    //   Delete Button add in LI
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    createLi.appendChild(deleteBtn);

    //   append LI in OL list
    todoList.appendChild(createLi);
    deleteAllBtn.style.display = "inline-block";

    //   Delete LI
    deleteBtn.addEventListener("click", function () {
      createLi.remove();
      if (todoList.children.length === 0) {
        deleteAllBtn.style.display = "none";
      }
    });

    //   Edit LI
    editBtn.addEventListener("click", function () {
        let editVal=document.getElementById("editVal")
      let forEditText = createLi.childNodes[0].nodeValue;
      editVal.value = forEditText;
    editol.style.display="block"
    todoList.style.display = "none";
      saveBtn.style.display = "inline-block";
      addBtn.style.display = "none";
      editedLI = createLi;
    });

    //   Save Edited Todo
    saveBtn.addEventListener("click", function () {
        editol.style.display="none"
      saveBtn.style.display = "none";
      todoList.style.display="block"
      addBtn.style.display = "inline-block";
      editedLI.childNodes[0].nodeValue = editVal.value;
    });
  } else {
    alert("Please Input Todo");
  }

  todoInput.value = "";
}

function deleteAll() {
  console.log(todoList.children.length);
  if (todoList.children.length > 0) {
    todoList.innerHTML = null;
  }
  deleteAllBtn.style.display = "none";
}