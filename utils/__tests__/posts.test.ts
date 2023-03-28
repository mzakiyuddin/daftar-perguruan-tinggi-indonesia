import { getPosts } from "~/utils/posts";

describe("getPosts", () => {
  it("should return an array", async () => {
    const posts = await getPosts();

    expect(Array.isArray(posts)).toBe(true);
    expect(posts).toHaveLength(100);

    posts.forEach((post) => {
      expect(post).toHaveProperty("userId");
      expect(post).toHaveProperty("id");
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("body");
    });
  });
});
