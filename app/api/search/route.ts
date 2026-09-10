import { type NextRequest, NextResponse } from "next/server";
import { Query } from "node-appwrite";
import { tablesDB } from "@/lib/appwrite/server";
import { auth } from "@/auth";

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams.get("q")?.trim();

    const session = await auth();

    if (!session?.user)
      return NextResponse.json({ posts: [] }, { status: 401 });

    if (!query) return NextResponse.json({ posts: [] });

    const response = await tablesDB.listRows({
      databaseId: process.env.APPWRITE_DATABASE_ID!,
      tableId: process.env.APPWRITE_POSTS_TABLE_ID!,
      queries: [Query.search("content", query), Query.limit(10)],
    });

    const posts = response.rows.map((post) => ({
      id: post.$id,
      content: post.content,
      imageId: post.imageId ?? null,
      createdAt: post.$createdAt,

      user: {
        id: session.user.id,
        name: session.user.name,
        image: session.user.image,
      },
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Search error:", error);

    return NextResponse.json(
      { message: "Failed to search posts" },
      { status: 500 },
    );
  }
}
