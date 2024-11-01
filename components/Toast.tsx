import { mono } from "@/pages/_app";
import React from "react";

interface ToastProps {
  message: string;
  isActive: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, isActive }) => {
  return (
    <div
      className={`fixed top-0 flex justify-end w-full transition-opacity ease-in-out duration-500 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      style={{ marginLeft: "-15px" }}
    >
      <div
        className={`bg-custom-orange text-white text-sm p-4 rounded m-4 mt-28 ${mono.className}`}
      >
        {message}
      </div>
    </div>
  );
};

export default Toast;
