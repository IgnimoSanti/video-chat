"use client";

import { SignInFields, SignInValidationSchema } from "@/types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFields>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(SignInValidationSchema),
  });

  return <div>SignInForm</div>;
}
