import type { Session } from "next-auth";

export type User = Session["user"];

export type Post = {
  id: string;
  userId: string;
  content: string;
  imageId: string | null;
  createdAt: string;
};

export type SearchPost = Omit<Post, "userId"> & {
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
};
