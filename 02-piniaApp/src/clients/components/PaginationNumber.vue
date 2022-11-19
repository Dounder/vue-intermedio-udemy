<script setup lang="ts">
import { toRefs } from 'vue';

interface Props {
  totalPages?: number;
  currentPage?: number;
}

interface Emits {
  (e: 'pageChanged', newPage: number): number;
}

const props = withDefaults(defineProps<Props>(), {
  currentPage: 1,
  totalPages: 1,
});
const { totalPages, currentPage } = toRefs(props);

const emits = defineEmits<Emits>();
</script>

<template>
  <article>
    <button
      :disabled="currentPage === 1"
      @click="emits('pageChanged', currentPage - 1)"
    >
      Previous
    </button>
    <button
      v-for="page in totalPages"
      :key="page"
      @click="emits('pageChanged', page)"
      :class="{ active: currentPage === page }"
    >
      {{ page }}
    </button>
    <button
      :disabled="currentPage === totalPages"
      @click="emits('pageChanged', currentPage + 1)"
    >
      Next
    </button>
  </article>
</template>

<style scoped>
article {
  margin-top: 1vmin;
}

button {
  background: transparent;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  padding: 1vmin 2vmin;
  color: var(--color-text);
  cursor: pointer;
  margin-right: 1vmin;
  transition: all 0.5s ease;
}

button:hover {
  background: hsla(169, 100%, 37%, 0.2);
  transition: all 0.5s ease;
}

button:disabled {
  cursor: not-allowed;
  color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
}

button.active {
  background: hsla(169, 100%, 37%, 0.2);
}
</style>
