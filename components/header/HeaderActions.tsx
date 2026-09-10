"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon as ChatIcon,
  Squares2X2Icon as GridIcon,
} from "@heroicons/react/24/solid";

import Tooltip from "@/components/Tooltip";
import Avatar from "@/components/Avatar";
import type { User } from "@/lib/types";

function HeaderActions({ user }: { user: User }) {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-end gap-2">
      <Link
        href="/friends"
        className={`hidden rounded-full px-2.5 py-1.5 text-[15px] font-medium transition active:scale-[0.98] xl:inline-block ${pathname === "/friends" ? "bg-blue-50 text-blue-500 hover:bg-blue-50" : "bg-gray-200 text-gray-900 hover:bg-gray-300"}`}
      >
        Find Friends
      </Link>

      <Tooltip content="Facebook menu">
        <button
          onClick={() => setActive("menu")}
          className={`icon ${active === "menu" ? "active" : ""}`}
        >
          <GridIcon />
        </button>
      </Tooltip>

      <Tooltip content="Messenger">
        <button
          onClick={() => setActive("messenger")}
          className={`icon ${active === "messenger" ? "active" : ""}`}
        >
          <ChatIcon />
        </button>
      </Tooltip>

      <Tooltip content="Notifications">
        <button
          onClick={() => setActive("notifications")}
          className={`icon ${active === "notifications" ? "active" : ""}`}
        >
          <BellIcon />
        </button>
      </Tooltip>

      <Tooltip content="Account">
        <Link href="/profile" onClick={() => setActive("account")}>
          <Avatar user={user} showChevron />
        </Link>
      </Tooltip>
    </div>
  );
}

export default HeaderActions;
