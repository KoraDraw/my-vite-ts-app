import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  const links = [
    { to: "/posts", label: "Посты" },
    { to: "/users/1/posts", label: "Посты пользователя 1" },
    { to: "/users/1/albums", label: "Альбомы пользователя 1" },
    { to: "/albums/1/photos", label: "Фото альбома 1" },
    { to: "/users/1/todos", label: "Задачи пользователя 1" },
  ];

  return (
    <nav className={styles.navbar}>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
