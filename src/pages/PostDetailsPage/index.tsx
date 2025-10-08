import { useParams } from "react-router-dom";

export const PostDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Детали поста</h2>
      <p>Пост ID: {id}</p>
    </div>
  );
};
