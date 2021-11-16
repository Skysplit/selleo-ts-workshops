import { createProcessor } from "./mapped-types";

type User = {
  id: number;
  name: string;
};

type Comment = {
  id: number;
  authorId: number;
  content: string;
};

type Data = {
  users: User[];
  comments: Comment[];
};

describe("#mapped-types", () => {
  describe("#createProcessor", () => {
    const data = {
      users: [
        { id: 1, name: "Tomek" },
        { id: 2, name: "Jan" },
      ],
      comments: [
        { id: 1, authorId: 1, content: "Gud excersise." },
        { id: 2, authorId: 2, content: "I agree." },
        { id: 3, authorId: 1, content: "Very good!" },
      ],
    };

    const processor = createProcessor({
      users: (data: Data) => data.users,
      comments: (data: Data) => data.comments,
    });

    const result = processor(data);

    const users: User[] = result.users;
    const comments: Comment[] = result.comments;

    expect(users).toEqual(data.users);
    expect(comments).toEqual(data.comments);
  });
});
