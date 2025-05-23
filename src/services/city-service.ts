import axios from 'axios';
import {Endpoints} from '~/common/constants/endpoints.constants';
import {useMutation, useQuery} from '@tanstack/react-query';
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
export const useFetchCity = () => {
  return useMutation<City[], Error, string>({
    mutationKey: [ServiceKey.FETCH_CITY],
    mutationFn: (countryRefId: string) =>
      axios
        .get<City[]>(`${Endpoints.FETCH_CITY_BY_COUNTRY}/${countryRefId}`)
        .then(res => res.data),
  });
};

/**
 * This hook is used to fetch the list of all countries.
 */
export const useFetchAllCities = () => {
  return useQuery<City[], Error>({
    queryKey: [ServiceKey.FETCH_All_CITY],
    queryFn: () =>
      axios.get<City[]>(Endpoints.FETCH_CITY).then(res => res.data),
  });
};
