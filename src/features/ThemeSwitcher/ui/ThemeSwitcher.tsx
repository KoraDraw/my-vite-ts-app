import { useTheme } from "../../../shared/lib/theme/ThemeContext";
import { Button } from "../../../shared/ui/Button/Button";
export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? "🌞 Светлая тема" : "🌜 Тёмная тема"}
    </Button>
  );
};
