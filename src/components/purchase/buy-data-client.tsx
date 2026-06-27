"use client";

import { buyData } from "@/actions/purchase/buy-data";

import { useMemo, useState } from "react";

import { Check, ChevronDown } from "lucide-react";

import { bundles, networks } from "@/lib/data/bundles";

const categories = ["All", "Daily", "Weekly", "Monthly", "Yearly"];

const networkMap = {
  mtn: "MTN",

  airtel: "AIRTEL",

  glo: "GLO",

  "9mobile": "NINEMOBILE",
} as const;

interface Props {
  walletBalance: number;
}

export function BuyDataClient({
  walletBalance,
}: Props) {
  const [selectedNetwork, setSelectedNetwork] = useState("mtn");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [selectedBundle, setSelectedBundle] = useState(bundles[0]);

  const [loading, setLoading] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");

  const filteredBundles = useMemo(() => {
    if (selectedCategory === "All") {
      return bundles;
    }

    return bundles.filter((bundle) => bundle.category === selectedCategory);
  }, [selectedCategory]);

  async function handlePurchase() {
    if (!phoneNumber) {
      alert("Enter phone number.");

      return;
    }

    try {
      setLoading(true);

      const result = await buyData({
        network: networkMap[selectedNetwork as keyof typeof networkMap],

        bundleName: selectedBundle.name,

        phoneNumber,

        amount: selectedBundle.amount,
      });

      alert(result.message);

      if (result.success) {
        setPhoneNumber("");
      }
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Buy Data
        </h1>

        <p className="mt-2 text-gray-500">
          Purchase data bundles instantly.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <div className="rounded-[32px] bg-white p-6 shadow-sm">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold">
                  1. Select Network
                </h2>

                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {networks.map((network) => {
                    const active = selectedNetwork === network.id;

                    return (
                      <button
                        key={network.id}
                        onClick={() => setSelectedNetwork(network.id)}
                        className={`relative rounded-3xl border p-5 transition-all ${
                          active
                            ? "border-blue-600 ring-2 ring-blue-100"
                            : "border-gray-200 hover:border-blue-200"
                        }`}
                      >
                        <div
                          className={`mx-auto flex size-14 items-center justify-center rounded-2xl text-lg font-bold text-white ${network.color}`}
                        >
                          {network.name.charAt(0)}
                        </div>

                        <p className="mt-4 font-semibold">
                          {network.name}
                        </p>

                        {active && (
                          <div className="absolute right-3 top-3 flex size-6 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Check className="size-4" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold">
                  2. Select Bundle
                </h2>

                <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`whitespace-nowrap rounded-2xl px-5 py-2 text-sm font-medium transition ${
                        selectedCategory === category
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {filteredBundles.map((bundle) => {
                    const active = selectedBundle.id === bundle.id;

                    return (
                      <button
                        key={bundle.id}
                        onClick={() => setSelectedBundle(bundle)}
                        className={`relative rounded-3xl border p-5 text-left transition-all ${
                          active
                            ? "border-blue-600 ring-2 ring-blue-100"
                            : "border-gray-200 hover:border-blue-200"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-2xl font-bold">
                              {bundle.name}
                            </h3>

                            <p className="mt-4 text-2xl font-bold">
                              ₦{bundle.amount.toLocaleString()}
                            </p>

                            <p className="mt-2 text-sm text-gray-500">
                              {bundle.validity}
                            </p>
                          </div>

                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                            {bundle.category}
                          </span>
                        </div>

                        {active && (
                          <div className="absolute right-3 top-3 flex size-6 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Check className="size-4" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                <button className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600">
                  Show more bundles

                  <ChevronDown className="size-4" />
                </button>
              </section>

              <section>
                <h2 className="text-xl font-semibold">
                  3. Enter Phone Number
                </h2>

                <div className="mt-5 flex overflow-hidden rounded-2xl border border-gray-200">
                  <div className="flex items-center gap-2 border-r bg-gray-50 px-4">
                    🇳🇬

                    <span className="font-medium">
                      +234
                    </span>
                  </div>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="h-16 flex-1 px-4 outline-none"
                  />
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="xl:sticky xl:top-6 xl:h-fit">
          <div className="rounded-[32px] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
              Purchase Summary
            </h2>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-gray-50 p-4">
              <div>
                <p className="font-semibold">
                  {selectedBundle.name}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {selectedBundle.category}
                  {" • "}
                  {selectedBundle.validity}
                </p>
              </div>

              <p className="text-2xl font-bold">
                ₦{selectedBundle.amount.toLocaleString()}
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-green-50 p-4">
              <p className="text-sm text-gray-500">
                Wallet Balance
              </p>

              <p className="mt-1 text-2xl font-bold text-green-700">
                ₦{walletBalance.toLocaleString()}.00
              </p>
            </div>

            <button
              onClick={handlePurchase}
              disabled={loading}
              className="mt-6 h-14 w-full rounded-2xl bg-blue-600 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? "Processing..."
                : "Confirm Purchase"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}