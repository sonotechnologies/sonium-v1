import Link from "next/link";

import { ArrowRight } from "lucide-react";

export function BuyDataCard() {
  return (
    <Link
      href="/buy-data"
      className="group block rounded-3xl border border-border bg-card p-6 transition hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">
            Buy Data
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Purchase bundles instantly.
          </p>
        </div>

        <div className="rounded-2xl bg-secondary p-3 text-primary transition group-hover:translate-x-1">
          <ArrowRight className="size-5" />
        </div>
      </div>
    </Link>
  );
}