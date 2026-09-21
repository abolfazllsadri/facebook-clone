"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToPost() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const postId = searchParams.get("post");

    if (!postId) return;

    const postEl = document.getElementById(`post-${postId}`);

    postEl?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [searchParams]);

  return null;
}
