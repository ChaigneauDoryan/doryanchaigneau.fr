
import React, { useState, useEffect, createContext } from 'react';
import Accueil from './sections/Accueil';
import Experience from './sections/Experience';
import Projets from './sections/Projets';
import Contact from './sections/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div>
        <Accueil />
        <Experience />
        <Projets />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
