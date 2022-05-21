class Validation {
  constructor() {}

  emptyCheck(value, id) {
    if (value === "") {
      document.getElementById(id).style.border = "2px solid red";
      document
        .getElementById(id)
        .setAttribute("placeholder", "Tasks cannot be left empty");
      return false;
    }
    document
      .getElementById(id)
      .setAttribute("placeholder", "Enter an activity...");
    document.getElementById(id).style.border = "none";
    document.getElementById(id).removeAttribute("style");
    return true;
  }
}
export default Validation;
