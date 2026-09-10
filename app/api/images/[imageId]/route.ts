import { storage } from "@/lib/appwrite/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ imageId: string }> },
) {
  try {
    const { imageId } = await params;

    if (!imageId) {
      return new Response("Image ID is required", {
        status: 400,
      });
    }

    const file = await storage.getFileView({
      bucketId: process.env.APPWRITE_POST_IMAGES_BUCKET_ID!,
      fileId: imageId,
    });

    return new Response(file);
  } catch (error) {
    console.error("Failed to get image:", error);

    return new Response("Image not found", {
      status: 404,
    });
  }
}
