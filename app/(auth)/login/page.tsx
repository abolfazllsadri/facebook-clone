import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Logo from "@/components/Logo";
import LoginForm from "@/components/login/LoginForm";

export default async function LoginPage() {
  const session = await auth();

  if (session) redirect("/");

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg sm:p-8">
        <div className="mb-8 flex justify-center">
          <Logo width={80} height={80} />
        </div>

        <h1 className="mb-2 text-center text-3xl font-bold">Facebook</h1>
        <p className="mb-8 text-center text-gray-500">Sign in to continue</p>

        <LoginForm />
      </div>
    </main>
  );
}
