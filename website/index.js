// const alltodoos = document.querySelector(".alltodoos");
const newTodoo = document.querySelector(".newtodo");

const data = { description: "buy oatmeal", done: false };

// alltodoos.addEventListener("click", () => getData());
newTodoo.addEventListener("click", () => createNewTodo());

function pushTodolist2Dom(data) {
  console.log(data);
  const myUL = document.querySelector(".myul");
  data.forEach((todo) => {
    const li = document.createElement("li");
    const icon = document.createElement("i");
    const img = document.createElement("img");
    const checkBox = document.createElement("input");
    if (todo.done) {
      li.style.textDecoration = "line-through";
      checkBox.checked = true;
    }
    checkBox.type = "checkbox";
    checkBox.className = "checkbox";
    img.className = "trashbin";
    img.src = "./assets/bin.png";
    img.width = 16;

    li.id = todo._id;
    li.className = "task";

    li.textContent = todo.description;
    icon.className = "icon";
    li.appendChild(checkBox);
    icon.appendChild(img);

    li.appendChild(icon);

    myUL.appendChild(li);
  });
}

// delete element
document.addEventListener("click", function (e) {
  const isTrashBin = e.target.matches(".trashbin");
  const isChecked = e.target.matches(".checkbox");

  if (isTrashBin) {
    const trashBin = document.querySelector(".trashbin");
    let trashBinParent = trashBin.parentNode;
    let selectedItem = trashBinParent.parentNode;
    deleteTask(selectedItem.id);
  }

  if (isChecked) {
    updateTask(e.target.parentNode.id);
  }
});

function removeEntriesFromTheDom() {
  const HtmlEl = document.getElementById("todolist");

  while (HtmlEl.firstChild) {
    HtmlEl.removeChild(HtmlEl.firstChild);
  }
}
