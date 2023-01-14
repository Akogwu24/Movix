import { toast } from 'react-toast';

export const successToast = (msg) => toast.success(msg || 'successful!');

export const errorToast = (msg) => toast.error(msg || 'Something went wrong!');

export const warningToast = (msg) => toast.warn(msg || 'Warning!');

export const infoToast = (msg) => toast.info(msg || 'Incorrect or Invalid!');
