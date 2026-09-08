import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastSuccess = (msg) => {
  return toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
  });
};
export const toastError = (msg) => {
  return toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
  });
};
export const toastWarning = (msg) => {
  return toast.warning(msg, {
    position: "top-right",
    autoClose: 5000,
  });
};
