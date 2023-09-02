import { defineStore } from "pinia";
import { ref } from "vue";

import { API_EPIGRAPH } from "@/api";

/** @description 铭文相关 */
const EpigraphStore = defineStore("epigraph", () => {
  /** 铭文列表 */
  const epigraph_list = ref<Epigraph.Data[]>([]);
  /** 筛选后的列表 */
  const filter_list = ref<Epigraph.Data[]>([]);

  /** @description 获取铭文列表 */
  const getEpigraph = async () => {
    const res = await API_EPIGRAPH.getEpigraphList();
    setEpigraphList(res);
  };
  getEpigraph();

  /** @description 设置铭文列表 */
  const setEpigraphList = (data: Epigraph.Data[]) => {
    epigraph_list.value = data;
    setFilter("全部");
  };

  /** @description 筛选显示 */
  const setFilter = (type: Epigraph.Category) => {
    if (type === "全部") {
      filter_list.value = epigraph_list.value;
    } else {
      filter_list.value = epigraph_list.value.filter((item) => item.type.includes(type));
    }
  };

  return {
    /** 铭文列表 */
    epigraph_list,
    /** 筛选后的列表 */
    filter_list,
    getEpigraph,
    setEpigraphList,
    setFilter,
  };
});

export { EpigraphStore };
export type EpigraphStore = ReturnType<typeof EpigraphStore>;
