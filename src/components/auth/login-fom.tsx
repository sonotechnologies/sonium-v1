"use client";

import { useState, useTransition } from "react";
import Link from "next/link";

import { useRouter } from "next/navigation";

import { signIn } from "next-auth/react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  type LoginInput,
} from "@/lib/validators/login";

import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
} from "lucide-react";

export function LoginForm() {
  const router = useRouter();

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [isPending, startTransition] =
    useTransition();

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: LoginInput) => {
    setError("");

    startTransition(async () => {
      const result = await signIn("credentials", {
        email: values.email,

        password: values.password,

        redirect: false,
      });

      if (!result || result.error) {
        setError("Invalid email or password");

        return;
      }

      router.push("/dashboard");

      router.refresh();
    });
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-7"
    >
      {/* EMAIL */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-gray-700">
          Email address
        </label>

        <div className="flex h-16 items-center rounded-2xl border border-gray-200 bg-white px-5 transition focus-within:border-blue-500">
          <Mail className="size-5 text-gray-400" />

          <input
            type="email"
            placeholder="Enter your email"
            {...form.register("email")}
            className="h-full flex-1 border-none bg-transparent px-4 text-sm outline-none"
          />
        </div>

        {form.formState.errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>

      {/* PASSWORD */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-gray-700">
          Password
        </label>

        <div className="flex h-16 items-center rounded-2xl border border-gray-200 bg-white px-5 transition focus-within:border-blue-500">
          <Lock className="size-5 text-gray-400" />

          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter your password"
            {...form.register("password")}
            className="h-full flex-1 border-none bg-transparent px-4 text-sm outline-none"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
          >
            {showPassword ? (
              <EyeOff className="size-5 text-gray-400" />
            ) : (
              <Eye className="size-5 text-gray-400" />
            )}
          </button>
        </div>

        {form.formState.errors.password && (
          <p className="mt-2 text-sm text-red-500">
            {form.formState.errors.password.message}
          </p>
        )}

        <div className="mt-3 flex justify-end">
          <button
            type="button"
            className="text-sm font-medium text-blue-600"
          >
            Forgot password?
          </button>
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      {/* LOGIN BUTTON */}
      <button
        type="submit"
        disabled={isPending}
        className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending
          ? "Signing In..."
          : "Login"}

        {!isPending && (
          <ArrowRight className="size-5" />
        )}
      </button>

      {/* DIVIDER */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-200" />

        <span className="text-sm text-gray-400">
          or continue with
        </span>

        <div className="h-px flex-1 bg-gray-200" />
      </div>

      {/* GOOGLE BUTTON */}
      <button
        type="button"
        className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white font-semibold text-gray-700 transition hover:bg-gray-50"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="size-5"
        />

        Continue with Google
      </button>

      {/* REGISTER */}
      <p className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-blue-600"
        >
          Register now
        </Link>
      </p>
    </form>
  );
}