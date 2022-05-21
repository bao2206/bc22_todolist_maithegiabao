import Task from "./Task.js";
// subclass
class CompletedTask extends Task {
  constructor(...props) {
    super(...props);
    this.isCompleted = true;
  }

  renderTask() {
    let cont = this.cont;
    return `
    <li>
      <p>${cont}</p>
      <div class="buttons">
        <button class="remove">
          <i class="fa-solid fa-trash" onclick="remove('${cont}')"></i>
        </button>
        <button class="complete">
          <i class="far fa-check-circle" onclick="complete('${cont}')"></i>
        </button>
      </div>
    </li>`;
  }
}
export default CompletedTask;
