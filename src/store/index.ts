import { create } from "zustand";
import { updateTaskInput } from "../schema/todo";

type State = {
  editTask: updateTaskInput;
  updateEditedTask: (payload: updateTaskInput) => void;
  resetEditedTask: () => void;
};

const useStore = create<State>((set) => ({
  editTask: {
    taskId: "",
    title: "",
    body: "",
  },
  updateEditedTask: (payload) => set({ editTask: payload }),
  resetEditedTask: () => set({ editTask: { taskId: "", title: "", body: "" } }),
}));
export default useStore;
