import React from "react";

interface PostCardProps {
  title: string;
  content: string;
}

export const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  return (
    <article
      style={{ border: "1px solid #ccc", padding: 16, marginBottom: 12 }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
};
