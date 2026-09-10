"use server";

import { storage, tablesDB } from "@/lib/appwrite/server";
import { InputFile } from "node-appwrite/file";
import { ID } from "node-appwrite";
import { auth } from "@/auth";
import type { Post } from "@/lib/types";

export async function getPosts(): Promise<{
  success: boolean;
  error?: string;
  posts: Post[];
}> {
  try {
    const response = await tablesDB.listRows({
      databaseId: process.env.APPWRITE_DATABASE_ID!,
      tableId: process.env.APPWRITE_POSTS_TABLE_ID!,
    });

    return {
      success: true,
      posts: response.rows.map((post) => ({
        id: post.$id,
        userId: post.userId,
        content: post.content,
        imageId: post.imageId,
        createdAt: post.$createdAt,
      })),
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      posts: [],
      error: "Failed to fetch posts",
    };
  }
}

export async function createPost(formData: FormData) {
  const session = await auth();

  if (!session?.user?.id) throw new Error("Unauthorized");

  const content = formData.get("content")?.toString().trim() ?? "";

  const image = formData.get("image");

  let imageId: string | null = null;

  // Upload image if provided
  if (image instanceof File && image.size > 0) {
    const buffer = Buffer.from(await image.arrayBuffer());

    const uploadedFile = await storage.createFile({
      bucketId: process.env.APPWRITE_POST_IMAGES_BUCKET_ID!,
      fileId: ID.unique(),
      file: InputFile.fromBuffer(buffer, image.name),
    });

    imageId = uploadedFile.$id;
  }

  // Create post
  const post = await tablesDB.createRow({
    databaseId: process.env.APPWRITE_DATABASE_ID!,
    tableId: process.env.APPWRITE_POSTS_TABLE_ID!,
    rowId: ID.unique(),
    data: {
      userId: session.user.id,
      content,
      imageId,
      $createdAt: new Date().toISOString(),
    },
  });

  return {
    success: true,
    post: {
      id: post.$id,
      userId: post.userId,
      content: post.content,
      imageId: post.imageId,
      createdAt: post.$createdAt,
    } satisfies Post,
  };
}
