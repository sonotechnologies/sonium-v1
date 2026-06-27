import Image from "next/image";

export function AppPreview() {
  return (
    <section className="bg-[#f7f9ff] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            APP PREVIEW
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Simple. Clean. Powerful.
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-xl">
            <Image
              src="/dashboard-preview.png"
              alt="Dashboard preview"
              width={1200}
              height={800}
              className="h-auto w-full"
            />
          </div>

          <div className="mx-auto max-w-[340px] overflow-hidden rounded-[48px] border-[10px] border-black bg-black shadow-2xl">
            <Image
              src="/mobile-preview.png"
              alt="Mobile app preview"
              width={500}
              height={1000}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}