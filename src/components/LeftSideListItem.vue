<script setup lang="ts">
import type { ListItem } from "@/types";
import { AppCheckbox, InputNumber, InputColor } from ".";
import { useStore } from "@/stores";

interface Props {
  listItem: ListItem;
}

defineProps<Props>();

const { actions } = useStore();
</script>

<template>
  <div class="grid grid-cols-[auto_1fr_auto_auto] gap-3 items-center">
    <app-checkbox
      @change="actions.toggle(listItem)"
      :checked="listItem.active"
    />
    <slot></slot>
    <input-number
      @change="actions.changeCount(listItem, $event.currentTarget.value)"
      :value="listItem.count"
    />
    <input-color
      @change="actions.changeColor(listItem, $event.currentTarget.value)"
      :value="listItem.color"
    />
  </div>
</template>

<style scoped>
/*  */
</style>
