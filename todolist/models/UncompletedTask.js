import Task from "./Task.js";

class UncompletedTask extends Task {
  constructor(...props) {
    super(...props);
    this.isCompleted = false;
  }

  renderTask() {
    let cont = this.cont;
    return `
    <li>
        <p>${cont}</p>
        <div class="buttons">
            <button class="remove" onlick="remove('${cont}')">
                <i class="fa-solid fa-trash-can"></i>
            </button>
            <button class="complete" onlick="complete('${cont}')">
                <i class="fa-regular fa-circle-check" ></i>
            </button>
        </div>
    </li>
`;
  }
}

export default UncompletedTask;
