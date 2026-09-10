"use client";

import { mobileNavItems } from "@/lib/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 flex min-h-14 items-stretch justify-around border-t border-gray-300 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_8px_rgba(0,0,0,0.1)] md:hidden"
    >
      {mobileNavItems.map(({ label, href, icons }) => {
        const isActive = href !== null && pathname === href;
        const Icon = isActive ? icons.solid : icons.outline;

        return href ? (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className={`flex min-h-14 w-12 flex-1 flex-col items-center justify-center gap-0.5 ${
              isActive ? "text-blue-500" : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <Icon className="h-6 w-6" />
            <span className="text-[10px] leading-none font-medium">
              {label}
            </span>
          </Link>
        ) : (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="flex min-h-14 flex-1 cursor-pointer flex-col items-center justify-center gap-0.5 text-gray-500 hover:bg-gray-100"
          >
            <Icon className="h-6 w-6" />
            <span className="text-[10px] leading-none font-medium">
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export default MobileNav;
