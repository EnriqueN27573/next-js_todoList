// Buffer Line
"use client";
import { useState, useRef, createContext, ReactNode, useEffect } from "react";
import useDialogButton from "./useDialogButton";
import useDialog from "./useDialog";
import { customModalStyle as styles } from "./CustomModal.style";
import CustomButton from "../CustomButton/CustomButton";

export const customModalContext = createContext<{
  changeModalTitle: (newTitle: string) => void;
  changeInput: (newTitle: string, defaultValue?: string) => void;
  changeConfirmButton: (
    newButtonVisibility?: boolean,
    newButtonText?: string,
    newButtonFunction?: (newFormData: string) => Promise<{ error?: string }>
  ) => void;
  changeCloseButtonText: (newButtonText: string) => void;
  showDialog: () => void;
}>({} as any);

function CustomModalProvider(props: { children: ReactNode }) {
  const [inputInfo, setInputInfo] = useState<{
    title: string;
    defaultValue: string;
  }>({ title: "New Information", defaultValue: "" });
  let formValue = useRef<string>(inputInfo.defaultValue).current;

  const { dialogTitle, dialogRef, showDialog, closeDialog, changeModalTitle } =
    useDialog();

  const {
    closeButtonText,
    changeCloseButtonText,
    confirmButton,
    changeConfirmButton,
  } = useDialogButton();

  const confirmButtonClick = async () => {
    const { error } = await confirmButton!.function(formValue);
    if (error) window.alert("error");
    else closeDialog();
  };

  const changeInput = (newTitle: string, defaultValue: string = "") => {
    setInputInfo({ title: newTitle, defaultValue });
  };

  const changeFormValue = (event: any) => {
    formValue = event.target.value;
  };

  return (
    <customModalContext.Provider
      value={{
        changeModalTitle,
        changeInput,
        changeConfirmButton,
        changeCloseButtonText,
        showDialog,
      }}
    >
      <dialog ref={dialogRef} id="dialogShell" className={styles.dialogShell}>
        <div id="dialogTitle" className={styles.dialogTitle}>
          {dialogTitle}
        </div>
        <div id="inputSection" className={styles.inputSection}>
          <div id="dialogInputTitle" className={styles.dialogInputTitle}>
            {inputInfo.title}
          </div>
          <input
            id="dialogInput"
            className={styles.dialogInput}
            defaultValue={inputInfo.defaultValue}
            onChange={changeFormValue}
          />
        </div>
        <div id="buttonSection" className={styles.buttonSection}>
          {confirmButton ? (
            <CustomButton
              buttonText={confirmButton.text}
              buttonFunction={confirmButtonClick}
            />
          ) : null}
          <CustomButton
            buttonColor={"red"}
            buttonText={closeButtonText}
            buttonFunction={closeDialog}
          />
        </div>
      </dialog>
      {props.children}
    </customModalContext.Provider>
  );
}

export default CustomModalProvider;
