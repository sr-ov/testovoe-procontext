<script setup lang="ts">
import type { Lists } from "@/types";
import { RightSideItem } from ".";

interface Props {
  lists: Lists;
}

defineProps<Props>();
</script>

<template>
  <ul class="space-y-2 p-6 border border-black">
    <li
      class="p-2 border border-black"
      v-for="(list, listName) in lists"
      :key="listName"
    >
      <right-side-item :list="list">
        {{ listName }}
      </right-side-item>
    </li>
  </ul>
</template>

<style scoped>
/*  */
</style>
