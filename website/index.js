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
    img.addEventListener("click", function handleClick(event) {
      let tempNode = event.target.parentNode;
      deleteTask(tempNode.parentNode.id);
    });
    checkBox.addEventListener("click", function handleClick(event) {
      let tempNode = event.target.parentNode;
      // li.style.textDecoration = "line-through"
      //   ? (li.style.textDecoration = "line-through")
      //   : (li.style.textDecoration = "");

      checkBox.checked
        ? (li.style.textDecoration = "line-through")
        : (li.style.textDecoration = "");

      updateTask(tempNode.id, checkBox.checked);
    });

    checkBox.type = "checkbox";
    checkBox.className = "checkbox";
    img.className = "trashbin";
    img.src = "./assets/bin.png";
    img.width = 16;

    li.id = todo._id;
    li.className = "task";

    li.textContent = todo.description;
    icon.className = "icon";
    li.insertBefore(checkBox, li.firstChild);
    // li.appendChild(checkBox);
    icon.appendChild(img);

    li.appendChild(icon);

    myUL.appendChild(li);
  });
}

function removeEntriesFromTheDom() {
  const HtmlEl = document.getElementById("todolist");

  while (HtmlEl.firstChild) {
    HtmlEl.removeChild(HtmlEl.firstChild);
  }
}
