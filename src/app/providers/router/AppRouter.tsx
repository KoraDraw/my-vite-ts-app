import { Route, Routes } from "react-router-dom";
import { PostListPage } from "../../../pages/PostListPage";
import { PostDetailsPage } from "../../../pages/PostDetailsPage";
import { UserAlbumsPage } from "../../../pages/UserAlbumsPage";
import { AlbumPhotosPage } from "../../../pages/AlbumPhotosPage";
import { UserTodosPage } from "../../../pages/UserTodosPage";
import { UserPostsPage } from "../../../pages/UserPostsPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts" element={<PostListPage />} />
      <Route path="/posts/:id" element={<PostDetailsPage />} />
      <Route path="/users/:id/albums" element={<UserAlbumsPage />} />
      <Route path="/albums/:id/photos" element={<AlbumPhotosPage />} />
      <Route path="/users/:id/todos" element={<UserTodosPage />} />
      <Route path="/users/:id/posts" element={<UserPostsPage />} />
    </Routes>
  );
};
