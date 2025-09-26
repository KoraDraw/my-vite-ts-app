import React from "react";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";

export const App: React.FC = () => {
  return (
    <MainLayout>
      <PostList />
    </MainLayout>
  );
};
