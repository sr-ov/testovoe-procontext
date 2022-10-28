<script setup lang="ts">
import type { List } from "@/types";
import { LeftSideListItem, AppCheckbox } from ".";
import { useStore } from "@/stores";

interface Props {
  list: List;
}

defineProps<Props>();

const { actions } = useStore();
</script>

<template>
  <div>
    <div
      :class="['accordion p-2 flex items-center gap-3', { open: list.active }]"
    >
      <app-checkbox @change="actions.toggle(list)" :checked="list.active" />
      <slot></slot>
    </div>
    <ul
      :class="[
        'space-y-2 pl-[72px] overflow-hidden',
        { 'max-h-0': !list.active },
      ]"
    >
      <li v-for="(value, key) in list.items" :key="key">
        <left-side-list-item :list-item="value">
          {{ key }}
        </left-side-list-item>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.accordion::before {
  content: "";
  width: 20px;
  height: 20px;
  background: no-repeat url("@/assets/icons/right-arrow.svg") center / 18px;
}
.accordion.open {
  @apply mb-2;
}
.accordion.open::before {
  transform: rotate(90deg);
}
</style>
