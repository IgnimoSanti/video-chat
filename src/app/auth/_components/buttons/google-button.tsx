"use client";

type Props = {
  callbackUrl?: string;
};
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ callbackUrl }: Props) {
  return (
    <div
      className="flex cursor-pointer items-center justify-center gap-x-3 rounded-xl bg-slate-100 px-16 py-5 dark:bg-slate-800"
      onClick={() => signIn("google", { callbackUrl })}
    >
      Continue with Google <FcGoogle className="h-6 w-6" />
    </div>
  );
}