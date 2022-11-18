<script setup lang="ts">
import { useCounterOptionsStore } from "@/store/counter-options.store";

const store = useCounterOptionsStore();
</script>

<template>
  <h1>El valor es: {{ store.count }}</h1>
  <h4>Ultimo cambio: {{ store.lastChanged }}</h4>
</template>

<style scoped></style>
