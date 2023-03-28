import fetch from "cross-fetch";
import { z } from "zod";

const Posts = z.array(
  z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string(),
  }),
);

export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = Posts.parse(await response.json());
  return posts;
};
