import {useMutation} from '@tanstack/react-query';
import axios, {AxiosError} from 'axios';
import {Endpoints} from '~/common/constants/endpoints.constants';
import {ServiceKey} from '~/common/constants/service.constants';

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

type VerifyOtpReq = {
  phoneNumber: string;
  otp: string;
};

type VerifyOtpRes = {
  message: string;
  success?: string;
};

// this hook is used to send otp to a provided phone number
export const useSendOtp = () => {
  return useMutation<SendOtpRes, AxiosError<ApiError>, SendOtpReq>({
    mutationKey: [ServiceKey.SEND_OTP],
    mutationFn: (req: SendOtpReq) =>
      axios.post<SendOtpRes>(Endpoints.SEND_OTP, req).then(res => res.data),
  });
};

//this hook is used to verify the otp entered by the user
export const useVerifyOtp = () => {
  return useMutation<VerifyOtpRes, AxiosError<VerifyOtpRes>, VerifyOtpReq>({
    mutationKey: [ServiceKey.SEND_OTP],
    mutationFn: (req: VerifyOtpReq) =>
      axios.post<VerifyOtpRes>(Endpoints.VERIFY_OTP, req).then(res => res.data),
  });
};
