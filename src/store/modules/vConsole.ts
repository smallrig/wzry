import { defineStore } from "pinia";
import { ref } from "vue";

/** @description 移动端调试工具 */
const VConsoleStore = defineStore("vConsole", () => {
  const vconsole = document.querySelector("#__vconsole") as HTMLElement;

  /** 显示 */
  const status = ref(true);

  /** @description 控制显示或隐藏 */
  const setStatus = () => {
    status.value = !status.value;
    vconsole.style.display = status.value ? "block" : "none";
  };
  setStatus();

  return { setStatus };
});

export { VConsoleStore };
export type VConsoleStore = ReturnType<typeof VConsoleStore>;
