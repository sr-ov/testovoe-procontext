<script setup lang="ts">
import { computed } from "vue";

import { useStore } from "@/stores";
import type { ListItem, ListItems } from "@/types";
import { shuffleArray } from "@/utils";
import { ColorButton } from ".";

interface Props {
  active: boolean;
  isSorted: boolean;
  listItems: ListItems;
}

const props = defineProps<Props>();

const shuffledColors = computed(() => {
  const { listItems } = props;
  const colors: { color: string; listItem: ListItem }[] = [];

  for (const key in listItems) {
    if (!Object.prototype.hasOwnProperty.call(listItems, key)) continue;
    const { active, color, count } = listItems[key];
    if (!active) continue;
    colors.push(
      ...Array(count).fill({
        color,
        listItem: listItems[key],
      })
    );
  }

  return !props.isSorted ? shuffleArray(colors) : null;
});

const { actions } = useStore();
</script>

<template>
  <div
    :class="[
      'overflow-hidden',
      {
        'space-y-2': isSorted,
        'flex content-start flex-wrap gap-1': !isSorted,
        'max-h-0': !active,
        'min-h-[100px]': active,
      },
    ]"
  >
    <template v-for="(list, listItemName) in listItems" :key="listItemName">
      <div class="flex flex-wrap gap-1" v-if="isSorted && list.active">
        <color-button
          v-for="n in list.count"
          :key="n"
          :color="list.color"
          @click="actions.decCount(list)"
        />
      </div>
    </template>

    <template v-if="!isSorted">
      <color-button
        v-for="({ color, listItem }, i) in shuffledColors"
        :key="i"
        :color="color"
        @click="actions.decCount(listItem)"
      />
    </template>
  </div>
</template>

<style scoped></style>
