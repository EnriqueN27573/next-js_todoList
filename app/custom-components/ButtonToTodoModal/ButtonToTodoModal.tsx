// Buffer Line
"use client";
import { useContext } from "react";
import { customModalContext } from "../../util-components/CustomModal/CustomModalProvider";
import CustomButton from "@/app/util-components/CustomButton/CustomButton";

type ButtonToTodoModalProps = {
  defaultValue: string;
  updateTodo: (newFormData: string) => Promise<{ error?: string }>;
};

function ButtonToTodoModal(props: ButtonToTodoModalProps) {
  const {
    changeModalTitle,
    changeInput,
    changeConfirmButton,
    changeCloseButtonText,
    showDialog,
  } = useContext(customModalContext);

  const buttonFunction = () => {
    changeModalTitle("Update Todo");
    changeInput("New Todo: ", props.defaultValue);
    changeConfirmButton(true, "Save", props.updateTodo);
    changeCloseButtonText("Cancel");
    showDialog();
  };

  return (
    <CustomButton buttonText={"Change Todo"} buttonFunction={buttonFunction} />
  );
}

export default ButtonToTodoModal;
