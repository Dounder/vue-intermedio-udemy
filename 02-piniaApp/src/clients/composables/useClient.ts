import { ref, watch, computed } from 'vue';
import { useMutation, useQuery } from '@tanstack/vue-query';

import type { Client } from '@/clients/interfaces/clients.interface';
import clientsApi from '@/api/clients-api';

const getClient = async (id: number): Promise<Client> => {
  const { data } = await clientsApi.get(`/clients/${id}`);
  return data;
};

const updateClient = async (client: Client): Promise<Client> => {
  const { data } = await clientsApi.patch<Client>(
    `/clients/${client.id}`,
    client
  );

  return data;
};

const useClient = (id: number) => {
  const client = ref<Client>();

  const { isLoading, data, isError } = useQuery(
    ['client', id],
    () => getClient(id),
    { retry: false }
  );

  const clientMutation = useMutation(updateClient);

  watch(
    data,
    () => {
      if (data.value) client.value = { ...data.value };
    },
    { immediate: true }
  );

  return {
    //* Props
    client,
    clientMutation,
    isError,
    isErrorUpdating: computed(() => clientMutation.isError),
    isLoading,
    isUpdating: computed(() => clientMutation.isLoading),
    isUpdatingSuccess: computed(() => clientMutation.isSuccess),

    //! Getters
    //? Methods
    updateClient: clientMutation.mutate,
  };
};

export default useClient;
