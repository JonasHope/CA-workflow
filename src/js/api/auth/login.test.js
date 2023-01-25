import { login } from "./login";

const loginMock = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({
    name: "test",
    email: "test@noroff.no",
    banner: "",
    avatar: "",
    token: "token",
  }),
});

global.fetch = loginMock;
class LSMock {
  constructor() {
    this.storage = {};
  }
  clear() {
    this.storage = {};
  }
  getItem(key) {
    return this.storage[key] || "";
  }
  setItem(key, value) {
    this.storage[key] = String(value);
  }
}

global.localStorage = new LSMock();
describe("login", () => {
  it("saves token when successfull login", async () => {
    localStorage.clear();
    await login("test@noroff.no", "");
    const token = localStorage.getItem("token");
    expect(token).not.toBeNull();
  });
});
