import type { Metadata } from "next";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: "%s | Facebook Clone",
    default: "Login | Facebook Clone",
  },
  description: "This is a simple facebook clone website.",
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}
