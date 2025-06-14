import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Endpoints} from '~/common/constants/endpoints.constants';
import {ServiceKey} from '~/common/constants/service.constants';

//types...
export type Country = {
  country: string;
  code: string;
  phoneCode: string;
  _id: string;
};

/**
 * This is a hook used to fetch the list of countries
 */
export const useFetchCountry = () => {
  return useQuery<Country[], Error>({
    queryKey: [ServiceKey.FETCH_COUNTRY],
    queryFn: () =>
      axios.get<Country[]>(Endpoints.FETCH_COUNTRY).then(res => res.data),
  });
};
