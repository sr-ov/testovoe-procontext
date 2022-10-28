<script setup lang="ts">
import { useToggle } from "@vueuse/core";

import type { List } from "@/types";
import { RightSideItemBody, RightSideItemHeader } from ".";

interface Props {
  list: List;
}

defineProps<Props>();

const [isSorted, toggleIsSorted] = useToggle(true);
</script>

<template>
  <right-side-item-header
    :is-sorted="isSorted"
    :active="list.active"
    @toggle-sorted="toggleIsSorted"
  >
    <slot></slot>
  </right-side-item-header>
  <right-side-item-body
    :is-sorted="isSorted"
    :active="list.active"
    :list-items="list.items"
  ></right-side-item-body>
</template>

<style scoped></style>
