import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function useHandleSubmit() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    navigate("/");
  };
  return{
    handleSubmit,
    formRef
  }
}

export default useHandleSubmit;
