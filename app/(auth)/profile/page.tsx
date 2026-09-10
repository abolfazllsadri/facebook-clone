import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function Page() {
  return (
    <div className="ml-6 space-y-2 p-6">
      <h1 className="text-2xl font-bold">Profile Settings Page</h1>
      <p className="text-xl font-medium">This feature is coming soon...</p>
    </div>
  );
}
