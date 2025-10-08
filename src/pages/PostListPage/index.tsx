import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import { PostList } from "../../widgets/PostList/PostList";

export const PostListPage = () => {
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return <PostList posts={posts} />;
};
