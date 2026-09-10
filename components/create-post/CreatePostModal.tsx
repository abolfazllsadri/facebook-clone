"use client";

import CreatePostForm from "@/components/create-post/CreatePostForm";
import type { User } from "@/lib/types";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon as CloseIcon } from "@heroicons/react/24/outline";
import type { Dispatch, SetStateAction } from "react";

type ModalProps = {
  user: User;
  isOpen: boolean;
  handleToggle: Dispatch<SetStateAction<boolean>>;
};

function CreatePostModal({ isOpen, handleToggle, user }: ModalProps) {
  const onClose = () => handleToggle(false);

  return (
    <Dialog open={isOpen} onClose={handleToggle} className="relative z-300">
      <DialogBackdrop className="fixed inset-0 bg-white/70" />

      <div className="fixed inset-0 flex items-center justify-center overflow-hidden sm:p-4">
        <DialogPanel className="relative flex h-full max-h-full w-full min-w-0 flex-col overflow-hidden bg-white shadow-xl sm:h-auto sm:max-h-[90vh] sm:max-w-125 sm:rounded-lg sm:p-0">
          <header className="relative border-b border-b-gray-300 px-4 py-4.5">
            <DialogTitle className="text-center text-xl font-bold">
              Create post
            </DialogTitle>

            <button
              className="absolute top-2 right-2 flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-1.5 transition hover:bg-gray-300"
              onClick={onClose}
            >
              <CloseIcon className="h-5.5 w-5.5 stroke-2 text-black/70" />
            </button>
          </header>

          <CreatePostForm user={user} onClose={onClose} />
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default CreatePostModal;
