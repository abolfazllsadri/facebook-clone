import { auth } from "@/auth";
import CreatePost from "@/components/create-post/CreatePost";
import Posts from "@/components/posts/Posts";
import Stories from "@/components/stories/Stories";

export default async function Feed() {
  const session = await auth();

  return (
    <div className="scroll mx-auto flex h-full min-h-0 w-full max-w-3xl flex-col overflow-x-hidden px-4 pt-6 pb-24 md:pb-6 lg:px-8">
      <CreatePost user={session?.user} />
      <Stories />
      <Posts user={session?.user} />
    </div>
  );
}
