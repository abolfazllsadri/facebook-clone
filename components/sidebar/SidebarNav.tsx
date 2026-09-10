"use client";

import ProfileNavItem from "@/components/header/ProfileNavItem";
import SidebarItem from "@/components/sidebar/SidebarItem";
import { navItems } from "@/lib/data";
import type { User } from "@/lib/types";
import { usePathname } from "next/navigation";

type SidebarNavProps = {
  user: User;
};

function SidebarNav({ user }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col items-center gap-2 sm:items-stretch">
        <ProfileNavItem user={user} />

        {navItems.length > 0 &&
          navItems.map(({ icon, label, href }) => (
            <SidebarItem
              href={href}
              Icon={icon}
              key={label}
              label={label}
              isActive={pathname === href}
            />
          ))}
      </ul>
    </nav>
  );
}

export default SidebarNav;
