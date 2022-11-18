<script setup lang="ts">
import { useCounterSetupStore } from "@/store/counter-setup.store";
import { storeToRefs } from "pinia";
import CounterSetupValue from "../components/CounterSetupValue.vue";

const store = useCounterSetupStore();
const { count, square } = storeToRefs(store);
</script>

<template>
  <h1>Pinia Setup</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ square }}</h4>
  <br />
  <button @click="store.increment()">+1</button>
  <button @click="store.incrementBy(2)">+2</button>
  <button @click="store.incrementBy(5)">+5</button>
  <button @click="store.$reset()">Reset</button>
  <br />
  <CounterSetupValue />
</template>

<style scoped>
button {
  margin-right: 1vmin;
}
</style>
