"use client";

import { useState } from "react";
import {
  ArrowUturnRightIcon as ShareIcon,
  ChatBubbleOvalLeftIcon as CommentIcon,
} from "@heroicons/react/24/outline";
import { HandThumbUpIcon as LikeIcon } from "@heroicons/react/24/solid";

export default function PostActions() {
  const [like, setLike] = useState(0);
  const isActiveLike = like === 1;

  return (
    <div className="flex items-stretch">
      <button
        onClick={() => setLike((like) => (like === 1 ? 0 : 1))}
        className="group flex min-h-11 w-full flex-1 cursor-pointer items-center justify-center gap-2 rounded-sm px-2.5 text-gray-500 hover:bg-gray-200"
      >
        <LikeIcon
          className={`h-5.5 w-5.5 shrink-0 stroke-2 transition group-active:scale-150 group-active:-rotate-10 ${isActiveLike ? "fill-blue-600 stroke-transparent" : "fill-transparent stroke-gray-500"} `}
        />
        <span className="truncate text-xs font-semibold">
          {like > 0 ? like : "Like"}
        </span>
      </button>

      <button className="flex min-h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-sm p-2.5 text-gray-500 hover:bg-gray-200">
        <CommentIcon className="h-5.5 w-5.5 shrink-0 stroke-2" />
        <span className="truncate text-xs font-semibold">Comment</span>
      </button>

      <button className="flex min-h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-sm p-2.5 text-gray-500 hover:bg-gray-200">
        <ShareIcon className="h-5.5 w-5.5 shrink-0 stroke-2" />
        <span className="truncate text-xs font-semibold">Share</span>
      </button>
    </div>
  );
}
