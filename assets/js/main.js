const container = document.querySelector(".container");
const form = document.querySelector("form");
let data = [
  { id: 1, taskName: "test1", done: false },
  //   { id: 2, taskName: "test2", done: true },
  //   { id: 3, taskName: "test3", done: false },
];

function read() {
  container.innerHTML = "";
  data.forEach((element) => {
    addItem(element);
  });
}
const addItem = (item) => {
  container.innerHTML += `<div class="card ${item.done ? "done" : ""}">
                            <span>${item.taskName}</span>
                            <button class="green red" onclick="updatestate(${
                              item.id
                            })">Update State</button>
                            <button>Update Name</button>
                            <button class="del" onclick="deleteRow(event)">Delete</button>
                            </div>`;
};

const create = () => {
  const input = document.querySelector("#taskname");
  console.log(input.value);
  let id = data[data.length - 1].id + 1;
  const task = { id: id, taskName: input.value, done: false };
  data.push(task);
  addItem(task);
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  create();
});
function updatestate(id) {
  let x = data.find((element) => element.id == id);
  data = data.map((element) => {
    if (element.id == id) {
      element.done = !element.done;
    }
    return element;
  });
  read();
}
read();
const deleteRow = (event) => {
  event.target.parentElement.remove();
};
