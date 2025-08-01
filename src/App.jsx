import React, { useState, useEffect, createContext } from 'react';
import Accueil from './sections/Accueil';
import ExperienceTimeline from './sections/ExperienceTimeline';
import EducationTimeline from './sections/EducationTimeline';
import Projets from './sections/Projets';
import Contact from './sections/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState('light');

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = theme === 'system' ? systemTheme : theme;

    setResolvedTheme(currentTheme);
    document.documentElement.setAttribute('data-bs-theme', currentTheme);
    localStorage.setItem('theme', theme);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (theme === 'system') {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        setResolvedTheme(newSystemTheme);
        document.documentElement.setAttribute('data-bs-theme', newSystemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, changeTheme }}>
      <div>
        <Accueil />
        <ExperienceTimeline />
        <EducationTimeline />
        <Projets />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;