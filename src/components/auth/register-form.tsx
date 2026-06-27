"use client";

import Link from "next/link";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
  type RegisterInput,
} from "@/lib/validators/auth";

import { registerUser } from "@/actions/auth/register";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";

export function RegisterForm() {
  const router = useRouter();

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [isPending, startTransition] =
    useTransition();

  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const password = form.watch("password");

  const onSubmit = (values: RegisterInput) => {
    setError("");

    startTransition(async () => {
      const result = await registerUser(values);

      if (!result.success) {
        setError(result.message);

        return;
      }

      router.push("/login");
    });
  };

  return (
    <div className="w-full max-w-2xl rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
      <div>
        <div className="mb-8 lg:hidden">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex size-10 items-center justify-center rounded-2xl bg-blue-600 text-white">
              S
            </div>

            <span className="text-2xl font-bold text-slate-900">
              Sonium
            </span>
          </Link>
        </div>

        <h1 className="text-4xl font-black tracking-tight text-slate-950">
          Create your account
        </h1>

        <p className="mt-3 text-lg text-slate-500">
          Fill in your details to get started
        </p>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 space-y-6"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* FULL NAME */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Full name
            </label>

            <div className="relative">
              <User className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

              <Input
                placeholder="Enter your full name"
                {...form.register("name")}
                className="h-14 rounded-2xl border-slate-200 pl-12 text-base shadow-none focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            </div>

            {form.formState.errors.name && (
              <p className="mt-2 text-sm text-red-500">
                {
                  form.formState.errors.name
                    .message
                }
              </p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-700">
              Phone number
            </label>

            <div className="flex overflow-hidden rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 border-r bg-slate-50 px-4 text-sm font-semibold">
                🇳🇬 +234
              </div>

              <Input
                placeholder="Enter phone number"
                {...form.register("phone")}
                className="h-14 border-0 text-base shadow-none focus-visible:ring-0"
              />
            </div>

            {form.formState.errors.phone && (
              <p className="mt-2 text-sm text-red-500">
                {
                  form.formState.errors.phone
                    .message
                }
              </p>
            )}
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Email address
          </label>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

            <Input
              type="email"
              placeholder="Enter your email"
              {...form.register("email")}
              className="h-14 rounded-2xl border-slate-200 pl-12 text-base shadow-none focus-visible:ring-2 focus-visible:ring-blue-500"
            />
          </div>

          {form.formState.errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {
                form.formState.errors.email
                  .message
              }
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-slate-700">
            Password
          </label>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

            <Input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Create a password"
              {...form.register("password")}
              className="h-14 rounded-2xl border-slate-200 pl-12 pr-14 text-base shadow-none focus-visible:ring-2 focus-visible:ring-blue-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
            >
              {showPassword ? (
                <EyeOff className="size-5" />
              ) : (
                <Eye className="size-5" />
              )}
            </button>
          </div>

          {form.formState.errors.password && (
            <p className="mt-2 text-sm text-red-500">
              {
                form.formState.errors
                  .password?.message
              }
            </p>
          )}
        </div>

        {/* PASSWORD CHECKS */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2
              className={`size-4 ${
                password.length >= 8
                  ? "text-green-500"
                  : "text-slate-300"
              }`}
            />

            <span
              className={
                password.length >= 8
                  ? "text-green-600"
                  : "text-slate-500"
              }
            >
              At least 8 characters
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2
              className={`size-4 ${
                /[A-Z]/.test(password)
                  ? "text-green-500"
                  : "text-slate-300"
              }`}
            />

            <span
              className={
                /[A-Z]/.test(password)
                  ? "text-green-600"
                  : "text-slate-500"
              }
            >
              One uppercase letter
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <CheckCircle2
              className={`size-4 ${
                /\d/.test(password)
                  ? "text-green-500"
                  : "text-slate-300"
              }`}
            />

            <span
              className={
                /\d/.test(password)
                  ? "text-green-600"
                  : "text-slate-500"
              }
            >
              One number
            </span>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* BUTTON */}
        <Button
          type="submit"
          disabled={isPending}
          className="h-14 w-full rounded-2xl bg-blue-600 text-base font-semibold hover:bg-blue-700"
        >
          {isPending
            ? "Creating Account..."
            : "Create Account"}
        </Button>

        {/* LOGIN */}
        <p className="text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Login now
          </Link>
        </p>
      </form>
    </div>
  );
}