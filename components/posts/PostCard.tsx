import PostActions from "@/components/posts/PostActions";
import PostHeader from "@/components/posts/PostHeader";
import type { Post, User } from "@/lib/types";
import Image from "next/image";

type PostCardProps = {
  post: Post;
  user: User;
};

export default function PostCard({ post, user }: PostCardProps) {
  const { id, content, imageId, createdAt } = post;

  return (
    <article
      id={`post-${id}`}
      className="w-full max-w-full rounded-xl bg-white shadow-sm"
    >
      <PostHeader user={user} createdAt={createdAt} />

      <div className="px-4 pb-4">
        <p className="text-base leading-5 wrap-break-word whitespace-pre-wrap text-gray-900">
          {content}
        </p>
      </div>

      {imageId && (
        <div className="relative flex aspect-4/3 max-h-125 w-full items-center justify-center overflow-hidden bg-gray-100">
          {/* Blurred background */}
          <div
            className="absolute inset-0 scale-120 bg-cover bg-center opacity-60 blur-2xl"
            style={{ backgroundImage: `url(/api/images/${imageId})` }}
          />

          {/* Main image */}
          <Image
            src={`/api/images/${imageId}`}
            alt="Post image"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 680px"
            className="relative z-10 object-contain"
          />
        </div>
      )}

      <PostActions />
    </article>
  );
}
