// Buffer Line
import { combineClasses, default as gs } from "./global.style";

const appPageStyles = {
  outerContainer: combineClasses([
    gs.flex.absCenter,
    gs.absFull,
    "h-screen py-2",
  ]),
  todoListContainer: "h-full border-2 border-black max-md:w-[480px] md:w-[60%]",
  headerTitle: combineClasses([
    gs.flex.xCenter,
    gs.weight.exBold,
    gs.textSize.lg,
    gs.underline,
    "my-2",
  ]),
};

export default appPageStyles;
