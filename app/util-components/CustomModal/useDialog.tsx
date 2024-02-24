// Buffer Line
import { useState, useRef } from "react";

function useDialog() {
  const [dialogTitle, setDialogTitle] = useState<string>("");
  let dialogRef = useRef<HTMLDialogElement>(null);

  const showDialog = () => dialogRef.current!.showModal();
  const closeDialog = () => dialogRef.current!.close();

  const changeModalTitle = (newTitle: string) => setDialogTitle(newTitle);

  return {
    dialogTitle,
    dialogRef,
    showDialog,
    closeDialog,
    changeModalTitle,
  };
}

export default useDialog;
