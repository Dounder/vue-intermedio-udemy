import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/clients/interfaces/clients.interface';

export const useClientsStore = defineStore('clientsStore', () => {
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(5);
  const clients = ref<Client[]>([]);

  return {
    //? Props
    currentPage,
    totalPages,
    clients,

    //* Getters

    //! Actions
    setClients(newClients: Client[]) {
      clients.value = newClients;
    },
    setPage(page: number) {
      if (page === currentPage.value) return;
      if (page <= 0) return;
      if (page > totalPages.value) return;

      currentPage.value = page;
    },
  };
});
