"use client";

import type { Dispatch, SetStateAction } from "react";
import CreatePostModal from "@/components/create-post/CreatePostModal";
import type { User } from "@/lib/types";

type CreatePostTriggerProps = {
  user: User;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function CreatePostTrigger({
  user,
  isOpen,
  setIsOpen,
}: CreatePostTriggerProps) {
  const username = user?.name.split(" ").at(0);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="min-h-10 grow cursor-pointer truncate rounded-full bg-gray-200/60 px-3 py-2 text-left text-[15px] font-normal text-gray-500 transition select-none hover:bg-gray-200 focus:outline-none sm:text-[17px]"
      >
        What&apos;s on your mind, {username}?
      </button>

      <CreatePostModal user={user} isOpen={isOpen} handleToggle={setIsOpen} />
    </>
  );
}

export default CreatePostTrigger;
