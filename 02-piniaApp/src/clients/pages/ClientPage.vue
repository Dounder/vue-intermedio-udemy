<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import useClient from '@/clients/composables/useClient';
import LoadingModal from '@/shared/components/LoadingModal.vue';

const route = useRoute();
const router = useRouter();

const {
  client,
  isLoading,
  isError,
  clientMutation,
  updateClient,
  isUpdating,
  isUpdatingSuccess,
} = useClient(+route.params.id);

watch(clientMutation.isSuccess, () => {
  setTimeout(() => clientMutation.reset(), 2000);
});

watch(isError, () => {
  if (isError.value) router.replace({ name: 'client-list' });
});
</script>

<template>
  <h3 v-if="isUpdating">Saving...</h3>
  <h3 v-if="isUpdatingSuccess">Saved</h3>

  <LoadingModal v-if="isLoading" />

  <section v-if="client">
    <h1>{{ client.name }}</h1>
    <form @submit.prevent="updateClient(client!)">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Nombre del cliente"
        v-model="client.name"
      />
      <br />
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Direccion"
        v-model="client.address"
      />
      <br />
      <button type="submit" :disabled="isUpdatingSuccess.value">Save</button>
    </form>
  </section>

  <code>{{ client }}</code>
</template>

<style scoped>
input {
  width: 100%;
  padding: 1vmin 1.5vmin;
  margin-bottom: 1vmin;
}

button {
  margin-bottom: 1vmin;
}
</style>
