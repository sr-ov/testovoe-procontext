<script setup lang="ts">
import { LeftSide, RightSide } from "@/components";
import { useStore } from "@/stores";

const { state } = useStore();
</script>

<template>
  <div class="max-w-[1280px] p-4 mx-auto h-screen grid">
    <div class="grid grid-cols-2 gap-24 p-6 border border-black">
      <left-side :lists="state.lists" />
      <right-side :lists="state.lists" />
    </div>
  </div>
</template>

<style scoped></style>
