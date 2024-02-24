// Buffer Line
"use client";

import { default as gs, combineClasses } from "@/app/global.style";

type CustomButtonProps = {
  buttonText: string;
  buttonFunction: (() => Promise<void>) | (() => void);
  buttonColor?: "red" | "blue";
};

function CustomButton(props: CustomButtonProps) {
  const onButtonClick = () => {
    props.buttonFunction();
  };

  return (
    <button
      className={combineClasses([
        "px-2 py-0.5 rounded text-slate-100 font-bold border-2 border-slate-500",
        gs.textSize.default,
        props.buttonColor === "red" ? "bg-red-500" : "bg-sky-400",
      ])}
      onClick={onButtonClick}
    >
      {props.buttonText}
    </button>
  );
}

export default CustomButton;
