import React from 'react';
import { useTitle } from 'react-use';
import { useTranslation } from 'react-i18next';

const About = () => {
  useTitle('Hiragana | About');
  const { t } = useTranslation();

  return (
    <div className="container mx-auto flex justify-center px-10 mt-5 mb-10">
      <div className="block p-6 max-w-xl bg-white rounded-lg border border-gray-200 shadow-xl hover:shadow-none dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Katakana (V.2.0.0)
        </h5>
        <a
          href="https://hpn-katakana.netlify.app"
          className="font-medium text-gray-500 block">
          See Version 1 @ https://hpn-katakana.netlify.app
        </a>
        <p className="mt-5">{t('about.text')}</p>
      </div>
    </div>
  );
};

export default About;
