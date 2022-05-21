class TaskList {
  constructor() {
    this.list = [];
  }
  findTask(cont) {
    const task = this.list.find((item, index) => {
      return item.cont === cont;
    });
    console.log(task);
    return task;
  }
  delete(cont) {
    this.list = this.list.filter((task, index) => {
      return task.description !== cont;
    });
  }
}

export default TaskList;
