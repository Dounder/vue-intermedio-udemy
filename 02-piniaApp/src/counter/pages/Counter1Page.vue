<script setup lang="ts">
import { useCounterOptionsStore } from "@/store/counter-options.store";
import { storeToRefs } from "pinia";
import CounterOptionsValue from "../components/CounterOptionsValue.vue";

const store = useCounterOptionsStore();
const { count, squareCount } = storeToRefs(store);
</script>

<template>
  <h1>Pinia Options</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ squareCount }}</h4>
  <br />
  <button @click="store.increment()">+1</button>
  <button @click="store.incrementBy(2)">+2</button>
  <button @click="store.incrementBy(5)">+5</button>
  <button @click="store.$reset()">Reset</button>
  <br />
  <CounterOptionsValue />
</template>

<style scoped>
button {
  margin-right: 1vmin;
}
</style>
