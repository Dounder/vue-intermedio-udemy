<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumbers from '@/clients/components/PaginationNumber.vue';
import useClients from '@/clients/composables/useClients';
import LoadingModal from '@/shared/components/LoadingModal.vue';

const { isLoading, clients, currentPage, totalPages, getPage } = useClients();
</script>

<template>
  <h1>Listado de clientes</h1>
  <!-- Client list -->
  <ClientList :clients="clients" />

  <!-- Pagination -->
  <PaginationNumbers
    :current-page="currentPage"
    :total-pages="totalPages"
    @pageChanged="getPage"
  />

  <!-- Loading -->
  <LoadingModal v-if="isLoading" />
</template>

<style scoped></style>
