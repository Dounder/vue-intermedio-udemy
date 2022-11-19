import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useQuery } from '@tanstack/vue-query';

import clientsApi from '@/api/clients-api';
import type { Client } from '@/clients/interfaces/clients.interface';
import { useClientsStore } from '@/store/clients';

const getClients = async (page: number): Promise<Client[]> => {
  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
  return data;
};

const useClients = () => {
  const store = useClientsStore();
  const { clients, currentPage, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery(['clients?page=', currentPage], () =>
    getClients(currentPage.value)
  );

  watch(data, (clients) => {
    if (clients) store.setClients(clients);
  });

  return {
    //* Props
    clients,
    currentPage,
    isLoading,
    totalPages,

    //! Getters

    //? Actions
    getPage: store.setPage,
  };
};

export default useClients;
