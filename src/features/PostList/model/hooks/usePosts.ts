import { useEffect, useState } from "react";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
}

interface ApiPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const usePosts = (userId?: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const url = userId
      ? `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      : `https://jsonplaceholder.typicode.com/posts`;

    axios
      .get<ApiPost[]>(url) //
      .then((res) => {
        const data = res.data.map((post: ApiPost) => ({
          id: post.id,
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(data);
        setError(null);
      })
      .catch(() => setError("Ошибка загрузки постов"))
      .finally(() => setLoading(false));
  }, [userId]);

  return { posts, loading, error };
};
