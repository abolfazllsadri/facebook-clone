import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import RightSidebar from "@/components/RightSidebar";
import MobileNav from "@/components/MobileNav";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: "%s | Facebook Clone",
    default: "Facebook Clone",
  },
  description: "This is a simple facebook clone website.",
};

export default async function MainLayout({ children }: MainLayoutProps) {
  const session = await auth();

  if (!session) redirect("/login");

  return (
    <div className="flex h-dvh flex-col bg-gray-100">
      <Header />

      <div className="mx-auto flex min-h-0 w-full max-w-384 flex-1 gap-3 pt-14 lg:gap-4">
        <Sidebar />

        <main className="min-h-0 flex-1 overflow-hidden">{children}</main>

        <RightSidebar />
      </div>

      {/* Mobile-only bottom navigation */}
      <MobileNav />
    </div>
  );
}
