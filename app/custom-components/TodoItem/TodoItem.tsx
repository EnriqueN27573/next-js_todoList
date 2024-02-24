// Buffer Line
import CustomButton from "@/app/util-components/CustomButton/CustomButton";
import { todoItemStyles as style } from "./TodoItem.style";
import ButtonToTodoModal from "../ButtonToTodoModal/ButtonToTodoModal";
import { revalidatePath } from "next/cache";
import { DOMAIN } from "@/app/domain";

type TodoItemProps = {
  id: number;
  todoItem: string;
};

function TodoItem(props: TodoItemProps) {
  const updateTodo = async (newFormData: string) => {
    "use server";
    const res = await fetch(DOMAIN + "/api/todo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ id: props.id, todoName: newFormData }),
    });

    const result = await res.json();
    if (!result.error) {
      revalidatePath(DOMAIN + "/api/todo");
    }
    return result;
  };

  const deleteTodo = async () => {
    "use server";
    const res = await fetch(`${DOMAIN}/api/todo/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const result = await res.json();
    if (!result.error) {
      revalidatePath(DOMAIN + "/api/todo");
    }
  };

  return (
    <div
      id={`todoItemContainer${props.id}`}
      className={style.todoItemContainer}
    >
      <div id={`todoItem${props.id}`} className={style.todoItem}>
        {props.todoItem}
      </div>
      <div id={`todoButtons${props.id}`} className={style.todoButtons}>
        <ButtonToTodoModal
          defaultValue={props.todoItem}
          updateTodo={updateTodo}
        />
        <CustomButton
          buttonText="Delete Todo"
          buttonFunction={deleteTodo}
          buttonColor="red"
        />
      </div>
    </div>
  );
}

export default TodoItem;
