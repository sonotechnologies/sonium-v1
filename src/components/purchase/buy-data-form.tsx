"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  purchaseSchema,
  type PurchaseInput,
} from "@/lib/validators/purchase";

import { DATA_BUNDLES }
  from "@/lib/constants/data-bundles";

import { buyData }
  from "@/actions/purchase/buy-data";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function BuyDataForm() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [success, setSuccess] =
    useState("");

  const [isPending, startTransition] =
    useTransition();

  const form = useForm<PurchaseInput>({
    resolver: zodResolver(
      purchaseSchema
    ),

    defaultValues: {
      network: "MTN",
      bundleName: "",
      phoneNumber: "",
    },
  });

  const selectedNetwork =
    form.watch("network");

  const bundles = useMemo(() => {
    return DATA_BUNDLES[
      selectedNetwork
    ];
  }, [selectedNetwork]);

  const [selectedBundle, setSelectedBundle] =
  useState(bundles[0]);

  const onSubmit = (
    values: PurchaseInput
  ) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      const result = await buyData({
  ...values,

  amount: selectedBundle.amount,
});

      if (!result.success) {
        setError(result.message);
        return;
      }

      setSuccess(
        "Data purchase successful"
      );

      form.reset({
        network: "MTN",
        bundleName: "",
        phoneNumber: "",
      });

      router.refresh();
    });
  };

  return (
    <form
      onSubmit={form.handleSubmit(
        onSubmit
      )}
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Network
        </label>

        <select
          {...form.register("network")}
          className="w-full rounded-md border bg-background px-3 py-2"
        >
          <option value="MTN">
            MTN
          </option>

          <option value="AIRTEL">
            Airtel
          </option>

          <option value="GLO">
            Glo
          </option>

          <option value="NINEMOBILE">
            9mobile
          </option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Bundle
        </label>

        <select
          {...form.register(
            "bundleName"
          )}
          className="w-full rounded-md border bg-background px-3 py-2"
        >
          <option value="">
            Select Bundle
          </option>

          {bundles.map((bundle) => (
            <option
              key={bundle.name}
              value={bundle.name}
            >
              {bundle.name}
              {" - "}
              ₦
              {bundle.amount.toLocaleString()}
            </option>
          ))}
        </select>

        {form.formState.errors
          .bundleName && (
          <p className="mt-1 text-sm text-red-500">
            {
              form.formState.errors
                .bundleName.message
            }
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Phone Number
        </label>

        <Input
          placeholder="08012345678"
          {...form.register(
            "phoneNumber"
          )}
        />

        {form.formState.errors
          .phoneNumber && (
          <p className="mt-1 text-sm text-red-500">
            {
              form.formState.errors
                .phoneNumber.message
            }
          </p>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      {success && (
        <p className="text-sm text-green-600">
          {success}
        </p>
      )}

      <Button
        type="submit"
        className="w-full"
        disabled={isPending}
      >
        {isPending
          ? "Processing..."
          : "Buy Data"}
      </Button>
    </form>
  );
}