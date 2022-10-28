<script setup lang="ts"></script>

<template>
  <input class="block w-5 h-5" type="color" />
</template>

<style scoped>
input[type="color"] {
  -webkit-appearance: none;
  border: none;
}
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
input[type="color"]::-webkit-color-swatch {
  border: none;
}
</style>
