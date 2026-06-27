import { LogoutButton }
  from "@/components/auth/logout-button";

interface Props {
  name?: string | null;
}

export function DashboardHeader({
  name,
}: Props) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm text-muted-foreground">
          Welcome back 👋
        </p>

        <h1 className="mt-1 text-3xl font-bold tracking-tight">
          {name}
        </h1>
      </div>

      <LogoutButton />
    </div>
  );
}