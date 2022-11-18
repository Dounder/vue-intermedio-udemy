<script setup lang="ts">
import { useCounterSetupStore } from "@/store/counter-setup.store";

const store = useCounterSetupStore();
</script>

<template>
  <h1>El valor es: {{ store.count }}</h1>
  <h4>Ultimo cambio: {{ store.lastChanged }}</h4>
</template>

<style scoped></style>
