import TaskList from "../models/TaskList.js";
import Validation from "../models/Validation.js";
import CompletedTask from "../models/CompletedTask.js";
import UncompletedTask from "../models/UncompletedTask.js";

const validation = new Validation();
const taskList = new TaskList();

getLocalStorage();
function getEleById(id) {
  return document.getElementById(id);
}
function getTask() {
  const inputValue = getEleById("newTask").value;
  getEleById("newTask").focus();

  let flag = true;

  flag &= validation.emptyCheck(inputValue, "newTask");

  if (flag) {
    return new UncompletedTask(inputValue);
  }

  return null;
}

getEleById("addItem").addEventListener("click", () => {
  const task = getTask();

  if (task) {
    taskList.list.push(task);

    renderList(taskList.list);

    setLocalStorage();
  }

  getEleById("newTask").value = null;
});

function renderList(list) {
  if (list) {
    const uncomplete = list.reduce((result, task, index) => {
      if (task.isCompleted === false) {
        return result + task.renderTask();
      }
    }, "");

    if (uncomplete) {
      getEleById("todo").innerHTML = uncomplete;
    }
  }
}

function setLocalStorage() {
  const dataString = JSON.stringify(taskList.list);

  localStorage.setItem("TaskList", dataString);
}

function getLocalStorage() {
  const data = localStorage.getItem("TaskList");

  if (data) {
    let dataJSON = JSON.parse(data);
    taskList.list = dataJSON;

    taskList.list = taskList.list.map((task) => {
      const { text, isCompleted } = task;
      if (isCompleted === false) {
        return new UncompletedTask(text, isCompleted);
      } else {
        return new CompletedTask(text, isCompleted);
      }
    });

    renderList(taskList.list);
  }
}
