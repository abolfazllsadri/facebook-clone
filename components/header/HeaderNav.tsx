"use client";

import { usePathname } from "next/navigation";
import { headerItems } from "@/lib/data";
import HeaderItem from "@/components/header/HeaderItem";

function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden grow justify-center md:flex">
      <ul className="flex list-none items-stretch space-x-6 md:space-x-2">
        {headerItems.length > 0 &&
          headerItems.map((item) => (
            <HeaderItem
              href={item.href}
              title={item.title}
              icons={item.icons}
              key={item.title}
              isActive={pathname === item.href}
            />
          ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
