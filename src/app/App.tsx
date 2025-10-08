import React, { useState, useMemo, useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";
import type { Post } from "../widgets/PostList/PostList";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { ThemeSwitcher } from "../features/ThemeSwitcher/ui/ThemeSwitcher";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "../shared/ui/Modal/Modal";
import { withLoading } from "../shared/lib/hoc/withLoading";
import { Button } from "../shared/ui/Button/Button";
import { PostLengthFilter } from "../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../features/PostLengthFilter/lib/filterByLength";
import { AppRouter } from "../app/providers/router/AppRouter";
import { Navbar } from "../widgets/Navbar/Navbar";

const PostListWithLoading = withLoading(PostList);

const allPosts: Post[] = [
  { id: 1, title: "Первый пост", content: "Содержание первого поста..." },
  {
    id: 2,
    title: "Очень длинный заголовок второго поста",
    content: "Текст второго поста...",
  },
  { id: 3, title: "Короткий", content: "Информация из третьего поста..." },
];

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [minTitleLength, setMinTitleLength] = useState(0);
  const [loading] = useState(false);

  const filteredPosts = useMemo(
    () => filterByLength(allPosts, minTitleLength),
    [minTitleLength]
  );

  const handleFilterChange = useCallback((length: number) => {
    setMinTitleLength(length);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <>
          <Navbar />
          <header style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Button onClick={() => setIsModalOpen(true)}>О проекте</Button>
            <ThemeSwitcher />
            <PostLengthFilter onFilterChange={handleFilterChange} />
          </header>

          <main>
            <MainLayout>
              <AppRouter />
              <PostListWithLoading isLoading={loading} posts={filteredPosts} />
            </MainLayout>
          </main>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalHeader>О проекте</ModalHeader>
            <ModalBody>
              Это приложение на React и TypeScript с поддержкой темной и светлой
              темы, фильтрацией постов, модальным окном и HOC для загрузки.
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setIsModalOpen(false)}>Закрыть</Button>
            </ModalFooter>
          </Modal>
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
};
