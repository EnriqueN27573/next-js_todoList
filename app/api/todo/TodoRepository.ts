// Buffer Line
export type Todo = {
  id: number;
  todoName: string;
};

class TodoRepository {
  private todoList: Todo[] = [];
  constructor() {
    this.todoList.push({ id: 0, todoName: "first todo" });
    this.todoList.push({ id: 1, todoName: "second todo" });
  }

  getTodo() {
    return this.todoList;
  }

  postTodo(todoName: string) {
    if (todoName.trim() === "") {
      return { error: "todo should not be empty" };
    }

    let lastId: number = -1;
    for (let todo of this.todoList) {
      lastId = todo.id;
      if (todo.todoName === todoName) {
        return { error: "duplicated todo" };
      }
    }

    lastId++;
    this.todoList.push({ id: lastId, todoName });
    return {};
  }

  updateTodo(newTodo: Todo) {
    if (newTodo.todoName.trim() === "") {
      return { error: "todo should not be empty" };
    }

    let todoIndex: number = -1;

    for (let i = 0; i < this.todoList.length; i++) {
      const currentTodo = this.todoList[i];
      if (currentTodo.id === newTodo.id) {
        todoIndex = i;
        break;
      }
    }

    if (todoIndex === -1) {
      return { error: "todo not found" };
    }

    this.todoList = [
      ...this.todoList.slice(0, todoIndex),
      newTodo,
      ...this.todoList.slice(todoIndex + 1),
    ];
    return {};
  }

  deleteTodo(id: number) {
    const originalLength = this.todoList.length;

    this.todoList = this.todoList.filter((todo) => todo.id !== id);

    const newLength = this.todoList.length;

    return originalLength === newLength ? { error: "todo not found" } : {};
  }
}

export default TodoRepository;
