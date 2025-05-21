import {useQuery} from '@tanstack/react-query';
import axios, {AxiosResponse} from 'axios';
import {Endpoints} from '~/common/constants/endpoints.constants';
import {ServiceKey} from '~/common/constants/service.constants';

//types...
type Country = {
  country: string;
  code: string;
  phoneCode: string;
};

/**
 * This is a hook used to fetch the list of countries
 */
export const useFetchCountry = () => {
  return useQuery<AxiosResponse<any, any>, Error, AxiosResponse<Country[]>>({
    queryKey: [ServiceKey.FETCH_COUNTRY],
    queryFn: () => axios.get(Endpoints.FETCH_COUNTRY).then(res => res),
  });
};
