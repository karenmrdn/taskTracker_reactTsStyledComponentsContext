class Todo {
  id: string;
  text: string;
  checked: boolean;

  constructor(todoText: string) {
    this.id = Math.random().toString();
    this.text = todoText;
    this.checked = false;
  }
}

export default Todo;
