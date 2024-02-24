// Buffer Line
import { default as gs, combineClasses } from "../../global.style";

export const customModalStyle = {
  dialogShell: "max-md:w-[75%] md:w-[60%] rounded px-4 py-2",
  dialogTitle: combineClasses([
    "my-2",
    gs.flex.xCenter,
    gs.textSize.lg,
    gs.weight.exBold,
    gs.underline,
  ]),
  inputSection: gs.inlineWithGap,
  dialogInputTitle: combineClasses([gs.textSize.md, gs.weight.bold]),
  dialogInput: combineClasses([
    gs.textSize.md,
    "border-b-2 border-black rounded outline-0 px-1",
  ]),
  buttonSection: combineClasses([gs.flex.xEnd, gs.inlineWithGap, "my-2"]),
};
