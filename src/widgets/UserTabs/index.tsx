import { NavLink, useParams } from "react-router-dom";

export const UserTabs = () => {
  const { id } = useParams();

  return (
    <nav style={{ display: "flex", gap: "1rem", marginBottom: 20 }}>
      <NavLink to={`/users/${id}/posts`}>Posts</NavLink>
      <NavLink to={`/users/${id}/albums`}>Albums</NavLink>
      <NavLink to={`/users/${id}/todos`}>Todos</NavLink>
    </nav>
  );
};
