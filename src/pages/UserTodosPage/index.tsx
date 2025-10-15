import React from "react";
import { useParams } from "react-router-dom";
import { UserTabs } from "../../widgets/UserTabs";

export const UserTodosPage = () => {
  const { id } = useParams();

  return (
    <div>
      <UserTabs />
      <h2>Задачи пользователя</h2>
      <p>User ID: {id}</p>
    </div>
  );
};
