import { logout } from "@/actions/auth";
import Avatar from "@/components/Avatar";
import Tooltip from "@/components/Tooltip";
import type { User } from "@/lib/types";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowRightStartOnRectangleIcon as LogoutIcon } from "@heroicons/react/24/outline";

export default function ProfileDropdown({ user }: { user: User }) {
  const fullName = user?.name ?? "";
  const email = user?.email ?? "";

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Tooltip content="Account">
            <MenuButton className="rounded-full focus:outline-none">
              <span className="hidden max-w-28 truncate text-sm font-medium text-gray-700 sm:block">
                <Avatar user={user} isOpen={open} showChevron />
              </span>
            </MenuButton>
          </Tooltip>

          <MenuItems
            transition
            anchor="bottom end"
            className="z-300 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition duration-100 ease-out focus:outline-none data-closed:scale-95 data-closed:opacity-0 sm:w-56"
          >
            <div className="border-b border-gray-100 px-4 py-3">
              <p className="truncate text-sm font-medium text-gray-900">
                {fullName}
              </p>

              <p className="truncate text-xs text-gray-500">{email}</p>
            </div>

            <div className="py-1">
              <MenuItem>
                {({ focus }) => (
                  <button
                    onClick={logout}
                    className={`flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 transition-colors ${focus ? "bg-red-50" : ""}`}
                  >
                    <LogoutIcon className="h-5 w-5" />
                    <span>Log out</span>
                  </button>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </>
      )}
    </Menu>
  );
}
