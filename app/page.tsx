// Buffer Line
import CustomForm, { InputInfo } from "./util-components/CustomForm/CustomForm";
import { default as style } from "./app.style";
import CustomModalProvider from "./util-components/CustomModal/CustomModalProvider";
import { Suspense } from "react";
import TodoItem from "./custom-components/TodoItem/TodoItem";
import { DOMAIN } from "./domain";
import { revalidatePath } from "next/cache";

export default async function App() {
  const inputInfo: InputInfo[] = [{ param: "todo item", required: true }];

  const postTodo = async (formData: Record<string, string>) => {
    "use server";
    const res = await fetch(DOMAIN + "/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ todoName: formData["todo item"] }),
    });
    const result = await res.json();
    if (!result.error) revalidatePath(DOMAIN + "/api/todo");
    return result;
  };

  return (
    <CustomModalProvider>
      <div id="outerContainer" className={style.outerContainer}>
        <div id="todoListContainer" className={style.todoListContainer}>
          <div>
            <CustomForm
              title={"Create New Todo : "}
              inputInfo={inputInfo}
              submitButtonText={"Add Todo"}
              handleFormData={postTodo}
            />
          </div>
          <div id="headerTitle" className={style.headerTitle}>
            To Do List
          </div>
          <div>
            <Suspense fallback={<div>Loading ...</div>}>
              <TodoList />
            </Suspense>
          </div>
        </div>
      </div>
    </CustomModalProvider>
  );
}

async function TodoList() {
  const getTodo = async () => {
    const res = await fetch(DOMAIN + "/api/todo", { cache: "no-store" });
    const result = await res.json();
    return result.data;
  };

  const todoList = await getTodo();

  return (
    <>
      {todoList.map((todo: { id: number; todoName: string }) => (
        <div key={todo.id}>
          <Suspense fallback={<div>Loading ...</div>}>
            <TodoItem id={todo.id} todoItem={todo.todoName} />
          </Suspense>
        </div>
      ))}
    </>
  );
}
