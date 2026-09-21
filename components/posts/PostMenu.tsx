"use client";

import { deletePost } from "@/actions/post";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  EllipsisHorizontalIcon as DotsIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function PostMenu({ postId }: { postId: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      try {
        await deletePost(postId);
        router.refresh();
      } catch (error) {
        console.error("Failed to delete post:", error);
      }
    });
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:outline-none disabled:opacity-50"
        aria-label="Post options"
      >
        <DotsIcon className="h-6.5 w-6.5 stroke-2 text-gray-600" />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="absolute z-50 w-40 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none sm:w-44"
      >
        <MenuItem>
          {({ focus }) => (
            <button
              onClick={handleDelete}
              className={`flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 transition-colors disabled:cursor-not-allowed disabled:opacity-70 ${focus ? "not-disabled:bg-red-50" : ""}`}
              disabled={isPending}
            >
              <TrashIcon className="h-4 w-4" />
              <span>{isPending ? "Deleting..." : "Delete post"}</span>
            </button>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
