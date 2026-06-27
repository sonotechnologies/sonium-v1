import { RegisterForm } from "@/components/auth/register-form";
import { RegisterShowcase } from "@/components/auth/register-showcase";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-[1fr_1.05fr]">
        <RegisterShowcase />

        <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}