import { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  isActive: boolean;
}

const useToast = () => {
  const [toast, setToast] = useState<ToastProps>({
    message: "",
    isActive: false,
  });

  useEffect(() => {
    let timer: any;
    if (toast.isActive) {
      timer = window.setTimeout(() => {
        setToast((prevToast) => ({ ...prevToast, isActive: false }));
      }, 2000);
    }
    return () => window.clearTimeout(timer);
  }, [toast.isActive]);

  useEffect(() => {
    let timer: any;
    if (!toast.isActive && toast.message) {
      timer = window.setTimeout(() => {
        setToast((prevToast) => ({ ...prevToast, message: "" }));
      }, 500); // css duration
    }
    return () => window.clearTimeout(timer);
  }, [toast.isActive, toast.message]);

  const showToast = (message: string) => {
    setToast({ message, isActive: true });
  };

  return { toast, showToast };
};

export default useToast;
