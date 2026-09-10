"use client";

import { useState } from "react";
import Link from "next/link";
import Tooltip from "@/components/Tooltip";
import Avatar from "@/components/Avatar";
import CreatePostTrigger from "@/components/create-post/CreatePostTrigger";
import { actionsData } from "@/lib/data";
import type { User } from "@/lib/types";

function CreatePost({ user }: { user: User }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-box flex items-center gap-2 rounded-xl bg-white px-3 py-3 sm:px-4">
      <Link href="/profile">
        <Avatar user={user} />
      </Link>

      <CreatePostTrigger isOpen={isOpen} setIsOpen={setIsOpen} user={user} />

      <div className="flex items-center gap-0.5 sm:gap-1">
        {actionsData.length > 0 &&
          actionsData.map(({ color, Icon, label }) => (
            <Tooltip content={label} key={label}>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-200"
              >
                <Icon
                  className={`h-5.5 w-5.5 text-${color ? color : "gray"}-500 sm:h-6.5 sm:w-6.5`}
                />
              </button>
            </Tooltip>
          ))}
      </div>
    </div>
  );
}

export default CreatePost;
