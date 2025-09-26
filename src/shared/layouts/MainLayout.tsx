import React from "react";
import type { ReactNode } from "react";
import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flexGrow: 1, padding: 24 }}>{children}</main>
      <Footer />
    </div>
  );
};
