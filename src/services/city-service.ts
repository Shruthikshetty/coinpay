import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import {Endpoints} from '~/common/constants/endpoints.constants';
import {ServiceKey} from '~/common/constants/service.constants';

//types
export type City = {
  city: string;
  cityCode: string;
  countryRefId: string;
};

/**
 * This hook is used to fetch the list of city
 * by sending a country ref id it will only give cities of a single country
 */
export const useFetchCity = (countryRefId?: string) => {
  return useQuery<City[], Error>({
    queryKey: [ServiceKey.FETCH_CITY, countryRefId ?? 'all'], // cache key varies with countryCode
    queryFn: () =>
      axios
        .get<City[]>(Endpoints.FETCH_CITY, {
          params: countryRefId ? {countryRefId} : {}, // send param only if defined
        })
        .then(res => res.data),
  });
};
