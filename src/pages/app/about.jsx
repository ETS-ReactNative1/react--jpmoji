import React from 'react';
import { useTitle } from 'react-use';
import { useTranslation } from 'react-i18next';

const About = () => {
  useTitle('Momoji | About');
  const { t } = useTranslation();

  return (
    <div className="container mx-auto flex justify-center px-10 mt-5 mb-10">
      <div className="block p-6 max-w-xl bg-white rounded-lg border border-gray-200 shadow-xl hover:shadow-none dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          M0Ji (V.1.0.0)
        </h5>
        <a
          target={'_blank'}
          href="https://hpn-katakana.netlify.app"
          className="font-medium text-sm hover:underline text-gray-500 hover:text-indigo-500 block md:inline-block">
          See Katakana (V.1)
        </a>
        <a
          target={'_blank'}
          href="https://hpn-hiragana.netlify.app"
          className="font-medium text-sm ml-0 md:ml-3 hover:underline text-gray-500 hover:text-indigo-500 block md:inline-block">
          See Hiragana (V.1)
        </a>
        <div className="mt-5">{t('about.text')}</div>
        <small className="text-indigo-500 mt-5 inline-block">
          made with{' '}
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="13pt"
            height="13pt"
            className="inline"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#f00"
              stroke="none">
              <path
                d="M1435 4349 c-515 -47 -925 -432 -1032 -967 -24 -122 -24 -368 0 -480
108 -499 511 -1026 1216 -1587 287 -228 672 -490 767 -521 83 -27 265 -27 349
0 70 23 363 216 605 397 800 602 1261 1175 1377 1712 24 111 24 358 0 479
-108 540 -519 922 -1042 967 -359 31 -713 -111 -985 -395 -42 -44 -88 -95
-103 -114 l-27 -35 -27 35 c-54 69 -190 203 -263 259 -251 192 -538 278 -835
250z"
              />
            </g>
          </svg>{' '}
          by mr.htetphyonaing@gmail.com
        </small>
      </div>
    </div>
  );
};

export default About;
