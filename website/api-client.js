const baseUrl = "http://localhost:3000/";

const getData = async function () {
  removeEntriesFromTheDom();

  try {
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    pushTodolist2Dom(data);
    console.log("Get request: ", data);
    return data;
  } catch (err) {
    console.log(err, "fout bij ophalen data");
  }
};

const deleteTask = async function (id) {
  try {
    const response = await fetch(baseUrl + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("delete request: ", response);
    getData();
  } catch (err) {
    console.log(err, "fout bij deleten data");
  }
};
function createNewTodo() {
  if (document.getElementById("addTaskInput").value === "") {
    return;
  }
  const newData = {
    description: document.getElementById("addTaskInput").value,
    done: false,
  };
  fetch(baseUrl, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  document.getElementById("addTaskInput").value = "";
  getData();
}

const updateTask = function (id, state) {
  try {
    if (state) {
      const response = fetch(baseUrl + id, {
        method: "PUT",
        body: JSON.stringify({
          done: "true",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const response = fetch(baseUrl + id, {
        method: "PUT",
        body: JSON.stringify({
          done: "false",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    console.log("update request: ", response);
    getData();
  } catch (err) {
    console.log(err, "fout bij Updaten data");
  }
};
