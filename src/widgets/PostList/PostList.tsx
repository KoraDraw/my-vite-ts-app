import React, { useCallback, useMemo } from "react";
import { PostCard } from "../../entities/post/ui/PostCard";

export interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostListProps {
  posts: Post[];
  minTitleLength?: number;
}

export const PostList: React.FC<PostListProps> = ({
  posts,
  minTitleLength = 0,
}) => {
  const handlePostClick = useCallback((postId: number) => {
    console.log("Клик по посту", postId);
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.title.length >= minTitleLength);
  }, [posts, minTitleLength]);

  return (
    <section>
      {filteredPosts.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard
            title={post.title}
            content={post.content}
            onClick={() => handlePostClick(post.id)}
          />
        </React.Fragment>
      ))}
    </section>
  );
};
