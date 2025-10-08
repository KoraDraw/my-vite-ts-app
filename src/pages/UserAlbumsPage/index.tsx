import React from "react";
import { useParams } from "react-router-dom";
import { UserTabs } from "../../widgets/UserTabs";

export const UserAlbumsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <UserTabs />
      <h2>Альбомы пользователя</h2>
      <p>User ID: {id}</p>
    </div>
  );
};
