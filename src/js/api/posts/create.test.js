import { createPost } from "./create";

const postMock = {
  title: "test title",
  body: "test body",
  tags: ["tag1", "tag2", "tag3"],
  media: "",
  created: "2023-04-02: 12:34",
  updated: "2023-04-02: 12:34",
  id: 123,
  _count: {
    comments: 0,
    reactions: 0,
  },
};

const createPostTest = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue(postMock),
});

global.fetch = createPostTest;
describe("create", () => {
  it("creates a post successfully", async () => {
    const post = await createPost(
      "test title",
      "test body",
      ["tag1", "tag2", "tag3"],
      ""
    );
    expect(post).toMatchObject(postMock);
  });
});
