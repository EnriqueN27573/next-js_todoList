// Buffer Line
import { default as gs, combineClasses } from "../../global.style";

const customFormStyles = {
  customFormContainer: combineClasses([gs.absFull, "px-4 py-2"]),
  customForm: "border-2 border-black rounded p-2 bg-slate-100",
  formTitle: combineClasses([gs.underline, gs.weight.bold, gs.textSize.md]),
  inputContainer: gs.inlineWithGap,
  inputTitle: combineClasses([gs.weight.bold, gs.textSize.default]),
  input: combineClasses([
    gs.textSize.default,
    "grow border-b-2 border-black rounded px-2 focus:outline-0 bg-inherit",
  ]),
  formButtonContainer: combineClasses([gs.flex.xEnd, "mt-2"]),
};

export default customFormStyles;
