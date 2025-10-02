import React from "react";
import { useState } from "react";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";
import { ThemeProvider } from "../shared/lib/theme/ThemeContext";
import { ThemeSwitcher } from "../features/ThemeSwitcher/ui/ThemeSwitcher";
import { Modal } from "../shared/ui/Modal/Modal";
import { Button } from "../shared/ui/Button/Button";

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <>
        <header>
          <Button onClick={() => setModalOpen(true)}>О проекте</Button>
          <ThemeSwitcher />
        </header>

        <main>
          {
            <MainLayout>
              <PostList />
            </MainLayout>
          }
        </main>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2>О проекте</h2>
          <p>
            Это приложение на React и TypeScript с поддержкой темной и светлой
            темы и модальным окном.
          </p>
        </Modal>
      </>
    </ThemeProvider>
  );
};
