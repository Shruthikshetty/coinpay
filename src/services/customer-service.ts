import {useMutation} from '@tanstack/react-query';
import axios, {AxiosError} from 'axios';
import {Endpoints} from '~/common/constants/endpoints.constants';
import {ServiceKey} from '~/common/constants/service.constants';

//types...
type AddCustomerReq = {
  phoneNumber: string;
  name: string;
  userName: string;
  email: string;
  panNumber: string;
  address: string;
  city: string;
  country: string;
  dob: string;
  pinCode: string;
  profileImage?: string;
};

type AddCustomerRes = {
  _id: string; // this is ref id
  customerId: string; // thi is customer id
  phoneNumber: string;
  name: string;
  userName: string;
  email: string;
  panNumber: string;
  address: string;
  city: string;
  country: string;
  dob: string;
  pinCode: string;
  profileImage?: string;
};

type AddCUstomerError = {
  message: string;
  statusCode?: string;
};

// custom hook as a wrapper for the mutation to add customer
export const useAddCustomer = () => {
  return useMutation<
    AddCustomerRes,
    AxiosError<AddCUstomerError>,
    AddCustomerReq
  >({
    mutationKey: [ServiceKey.ADD_CUSTOMER],
    mutationFn: (req: AddCustomerReq) =>
      axios.post<AddCustomerRes>(Endpoints.CUSTOMER, req).then(res => res.data),
  });
};
