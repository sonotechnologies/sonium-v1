import { Sidebar }
  from "@/components/layout/sidebar";

import { MobileNav }
  from "@/components/layout/mobile-nav";

interface Props {
  children: React.ReactNode;
}

export function DashboardShell({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-[#f6f8fc]">
      <Sidebar />

      <main className="min-h-screen pb-24 lg:ml-[260px] lg:pb-8">
        <div className="mx-auto w-full max-w-7xl p-4 sm:p-6">
          {children}
        </div>
      </main>

      <MobileNav />
    </div>
  );
}