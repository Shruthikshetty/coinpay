/**
 * This file contains the services related to authentication
 */

import {useMutation} from '@tanstack/react-query';
import axios, {AxiosError} from 'axios';
import {Endpoints} from '~/common/constants/endpoints.constants';
import {ServiceKey} from '~/common/constants/service.constants';

//types...
type AddAuthReq = {
  customerRefId: 'string';
  password: 'string';
  pin: 'string';
};

type AddAuthRes = {
  message: 'string';
};

// this is used to add a new auth for a customer
export const useAddAuth = () => {
  return useMutation<AddAuthRes, AxiosError<Error>, AddAuthReq>({
    mutationKey: [ServiceKey.ADD_AUTH],
    mutationFn: (req: AddAuthReq) =>
      axios.post<AddAuthRes>(Endpoints.ADD_AUTH, req).then(res => res.data), // post to api
  });
};
