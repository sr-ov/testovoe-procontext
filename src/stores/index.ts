import { reactive } from "vue";
import { defineStore } from "pinia";

import type { List, ListItem, Lists } from "@/types";
import { lists } from "@/data";

interface State {
  lists: Lists;
}

export const useStore = defineStore("store", () => {
  const state = reactive<State>({
    lists,
  });

  const toggle = (list: List | ListItem) => {
    list.active = !list.active;
    if (!("color" in list)) {
      Object.values(list.items).forEach(
        (item: ListItem) => (item.active = list.active)
      );
    }
  };

  const decCount = (listItem: ListItem) => {
    listItem.count -= 1;
  };

  const changeCount = (listItem: ListItem, count: string) => {
    listItem.count = Math.abs(Number(count));
  };

  const changeColor = (listItem: ListItem, color: string) => {
    listItem.color = color;
  };

  return {
    state,
    actions: {
      toggle,
      decCount,
      changeColor,
      changeCount,
    },
  };
});
