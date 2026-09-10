import { getPosts } from "@/actions/post";
import PostCard from "@/components/posts/PostCard";
import type { User } from "@/lib/types";

export default async function Posts({ user }: { user: User }) {
  const { success, posts } = await getPosts();

  if (posts.length === 0 || !success)
    return (
      <p className="text-center text-xl font-medium text-gray-600">
        No posts yet...
      </p>
    );

  return (
    <div className="w-full max-w-full space-y-4">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} user={user} />
      ))}
    </div>
  );
}
