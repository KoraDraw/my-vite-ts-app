import { useParams } from "react-router-dom";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import { PostList } from "../../widgets/PostList/PostList";
import { UserTabs } from "../../widgets/UserTabs";

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = id ? parseInt(id) : undefined;

  const { posts, loading, error } = usePosts(userId);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <UserTabs />
      <PostList posts={posts} />
    </>
  );
};
