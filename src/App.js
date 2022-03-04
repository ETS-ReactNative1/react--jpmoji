import React, { useState, useEffect } from 'react';
import { Route, Navigate, Routes, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import NavBar from './components/navBar';
import Learn from './pages/learn';
import Practice from './pages/practice';
import NotFound from './pages/app/notFound';
import './App.css';
import About from './pages/app/about';

const App = () => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const [selectedCharacter, setSelectedCharacter] = useState('ka');

  const setLanguage = (lang) => i18n.changeLanguage(lang);

  const getLangCookie = () => Cookies.get('site-lang');

  const changeLanguage = (e) => {
    const lang = e.target.value;
    Cookies.set('site-lang', lang);
    setLanguage(lang);
  };

  const handleCharacter = (e, value) => {
    setSelectedCharacter(value);
  };

  useEffect(() => {
    // lang
    setLanguage(getLangCookie());
  }, []);

  return (
    <>
      {pathname === '/login' ||
        pathname === '/register' ||
        pathname === '/not-found' || (
          <NavBar
            langChange={changeLanguage}
            currentLang={getLangCookie()}
            selectedCharacter={selectedCharacter}
            handleCharacter={handleCharacter}
          />
        )}
      <Routes>
        <Route
          path="/learn"
          element={<Learn selectedCharacter={selectedCharacter} />}
        />
        <Route
          path="/practice"
          element={<Practice selectedCharacter={selectedCharacter} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" exact element={<Navigate to="/learn" />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </>
  );
};

export default App;
