"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFields, SignInValidationSchema } from "@/types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { GithubButton, GoogleButton } from "../buttons";

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
  const onSubmit: SubmitHandler<SignInFields> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex w-full grow items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full w-full min-w-[300px] bg-light-primary p-5 dark:bg-dark-primary sm:h-fit sm:w-fit sm:rounded-2xl"
      >
        <h1 className="mb-5 text-center text-2xl font-bold">Sign in</h1>
        <div className="my-3">
          <div>
            <Input {...register("email")} placeholder="Email" />
            <span className="ml-5 text-xl text-red-500">
              {errors.email?.message}
            </span>
          </div>
          <div>
            <Input {...register("password")} placeholder="Password" />
            <span className="ml-5 text-xl text-red-500">
              {errors.password?.message}
            </span>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Sign in
        </Button>
        <Separator className="my-5" />
        <div className="space-y-2">
          <GoogleButton />
          <GithubButton />
        </div>
        <div className="mt-3 text-sm text-secondary">
          {"Don't have an account?"}
          <Link href="/auth/sign-up" className="coursor-pointer text-blue-500">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
