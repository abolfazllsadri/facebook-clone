"use client";

import { type SubmitEvent, useState, useTransition } from "react";
import Image from "next/image";
import { XMarkIcon as CloseIcon } from "@heroicons/react/24/outline";

import { createPost } from "@/actions/post";
import UserInfo from "@/components/UserInfo";
import EmojiPicker from "@/components/create-post/EmojiPicker";
import ModalLoading from "@/components/create-post/ModalLoading";
import ModalPostActions from "@/components/create-post/ModalPostActions";
import type { User } from "@/lib/types";

type CreatePostFormProps = {
  user: User;
  onClose: () => void;
};

export default function CreatePostForm({ user, onClose }: CreatePostFormProps) {
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const username = user?.name.split(" ").at(0);

  function handleEmojiClick(emoji: string) {
    setContent((prev) => prev + emoji);
  }

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!content.trim() && !imageFile) return;

    const formData = new FormData();

    formData.append("content", content);

    if (imageFile) formData.append("image", imageFile);

    startTransition(async () => {
      try {
        const result = await createPost(formData);

        if (result.success) {
          console.log("Post created:", result.post);

          setContent("");
          removeImage();
          onClose();
        }
      } catch (error: unknown) {
        console.error("Failed to create post:", error);
      }
    });
  }

  return (
    <>
      {isPending && <ModalLoading />}

      <form className="flex min-h-0 flex-1 flex-col" onSubmit={handleSubmit}>
        <div className="min-h-0 flex-1 overflow-y-auto p-4">
          <UserInfo user={user} />

          <textarea
            autoFocus
            placeholder={`What's on your mind, ${username}?`}
            rows={3}
            className="my-1 w-full resize-none overflow-x-hidden text-2xl placeholder:text-2xl focus:outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          {imagePreview && (
            <div className="mt-3 flex justify-center">
              <div className="relative max-h-80 max-w-full overflow-hidden rounded-lg filter transition duration-150 hover:brightness-110">
                <Image
                  src={imagePreview}
                  width={470}
                  height={300}
                  alt="Selected image"
                  className="max-h-80 w-auto rounded-lg object-contain"
                />

                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-3 right-3 z-50 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gray-50 text-gray-600 shadow-md transition hover:bg-gray-100"
                >
                  <CloseIcon className="h-4.5 w-4.5 stroke-2" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="relative flex shrink-0 items-center justify-between px-4 py-1">
          <button type="button" className="cursor-pointer">
            <span className="flex h-8 w-8.5 items-center justify-center rounded-lg border-3 border-white bg-linear-to-br from-pink-500 via-yellow-400 to-green-400 text-sm font-bold text-white shadow-md text-shadow-lg">
              Aa
            </span>
          </button>

          <EmojiPicker onEmojiSelect={handleEmojiClick} />
        </div>

        <footer className="flex shrink-0 flex-col gap-4 p-4">
          <div className="flex items-center justify-between rounded-lg border border-gray-300 px-4 py-2.5 shadow-sm">
            <button className="cursor-pointer text-base font-semibold">
              Add to your post
            </button>

            <ModalPostActions
              image={imagePreview}
              setImagePreview={setImagePreview}
              setImageFile={setImageFile}
            />
          </div>

          <button
            type="submit"
            disabled={(!content.trim() && !imageFile) || isPending}
            className="cursor-pointer rounded-lg bg-blue-600 p-1.75 text-[15px] font-semibold text-white transition hover:brightness-95 active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-black/20 disabled:brightness-100"
          >
            Post
          </button>
        </footer>
      </form>
    </>
  );
}
