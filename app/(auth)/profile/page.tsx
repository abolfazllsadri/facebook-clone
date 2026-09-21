import { logout } from "@/actions/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Page() {
  return (
    <div className="ml-6 space-y-2 p-6">
      <h1 className="text-2xl font-bold">Profile Settings Page</h1>
      <p className="text-xl font-medium">This feature is coming soon...</p>
      <form action={logout}>
        <button
          type="submit"
          className="cursor-pointer rounded-xl border border-red-500 bg-red-500 px-5 py-2 text-lg font-semibold text-white transition hover:bg-white/80 hover:text-red-400"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
