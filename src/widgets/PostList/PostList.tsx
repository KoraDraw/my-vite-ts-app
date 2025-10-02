import React from "react";
import { PostCard } from "../../entities/post/ui/PostCard";

interface Post {
  id: number;
  title: string;
  content: string;
}

const postsMock: Post[] = [
  { id: 1, title: "Первый пост", content: "Содержание первого поста..." },
  { id: 2, title: "Второй пост", content: "Текст второго поста..." },
  { id: 3, title: "Третий пост", content: "Информация из третьего поста..." },
];

export const PostList: React.FC = () => {
  return (
    <section>
      {postsMock.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard title={post.title} content={post.content} />
        </React.Fragment>
      ))}
    </section>
  );
};
