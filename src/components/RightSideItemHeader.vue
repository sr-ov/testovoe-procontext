<script setup lang="ts">
import { AppButton } from ".";

interface Props {
  active: boolean;
  isSorted: boolean;
}
interface Emits {
  (e: "toggle-sorted"): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <div :class="['flex justify-between items-center gap-4', { 'mb-3': active }]">
    <slot></slot>
    <app-button :class="{ invisible: !active }" @click="$emit('toggle-sorted')">
      {{ isSorted ? "Перемешать" : "Сортировать" }}
    </app-button>
  </div>
</template>

<style scoped></style>
