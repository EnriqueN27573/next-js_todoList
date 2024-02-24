// Buffer Line
import { default as gs, combineClasses } from "../../global.style";

export const todoItemStyles = {
  todoItemContainer: "mx-4 my-2 p-2 border-2 border-slate-200 rounded bg",
  todoItem: combineClasses([gs.textSize.default, gs.weight.bold]),
  todoButtons: combineClasses([gs.flex.xEnd, gs.inlineWithGap]),
};
