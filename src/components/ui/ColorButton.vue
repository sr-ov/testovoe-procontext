<script setup lang="ts">
interface Props {
  color: string;
}

defineProps<Props>();
</script>

<template>
  <button
    class="block w-3 h-3 shrink-0"
    :style="{ backgroundColor: color }"
  ></button>
</template>

<style scoped></style>
