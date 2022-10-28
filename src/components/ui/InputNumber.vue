<script setup lang="ts"></script>

<template>
  <input class="block w-6 h-5 overflow-hidden" type="number" />
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
