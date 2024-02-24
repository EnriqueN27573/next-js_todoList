// Buffer Line
import { useState } from "react";

function useDialogButton() {
  const [closeButtonText, setCloseButtonText] = useState<string>("Close");
  const [confirmButton, setConfirmButton] = useState<{
    text: string;
    function: (newFormData: string) => Promise<{ error?: string }>;
  } | null>(null);

  const changeCloseButtonText = (newButtonText: string) =>
    setCloseButtonText(newButtonText);

  const changeConfirmButton = (
    newButtonVisibility: boolean = true,
    newButtonText: string = "",
    newButtonFunction: (
      newFormData: string
    ) => Promise<{ error?: string }> = async () => {
      return {};
    }
  ) => {
    if (newButtonVisibility) {
      setConfirmButton({
        text: newButtonText,
        function: newButtonFunction,
      });
    } else {
      setConfirmButton(null);
      return;
    }
  };

  return {
    closeButtonText,
    changeCloseButtonText,
    confirmButton,
    changeConfirmButton,
  };
}

export default useDialogButton;
