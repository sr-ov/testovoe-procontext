<script setup lang="ts">
import type { Lists } from "@/types";
import { LeftSideList } from ".";

interface Props {
  lists: Lists;
}

defineProps<Props>();
</script>

<template>
  <ul class="space-y-2 p-6 border border-black">
    <li v-for="(list, listName) in lists" :key="listName">
      <left-side-list :list="list"> {{ listName }} </left-side-list>
    </li>
  </ul>
</template>

<style scoped>
/*  */
</style>
