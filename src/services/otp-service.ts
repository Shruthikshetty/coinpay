import {useMutation} from '@tanstack/react-query';
import axios, {AxiosError} from 'axios';
import {Endpoints} from '~/common/constants/endpoints.constants';
import {Servicekey} from '~/common/constants/service.constants';

//types...
type SendOtpReq = {
  phoneNumber: string;
};

type SendOtpRes = {
  message: string;
  otp: string;
};

type ApiError = {
  message: string;
  code?: string;
};

// this hook is used to send otp to a provided phone number
export const useSendOtp = () => {
  return useMutation<SendOtpRes, AxiosError<ApiError>, SendOtpReq>({
    mutationKey: [Servicekey.SEND_OTP],
    mutationFn: (req: SendOtpReq) =>
      axios.post<SendOtpRes>(Endpoints.SEND_OTP, req).then(res => res.data),
  });
};
