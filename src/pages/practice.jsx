import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useTitle } from 'react-use';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { playAudio, playAudioWave } from '../utils/playAudio';
import skipCharacter from '../assets/skip-character.png';
import CustomRadioButton from '../components/customRadioButton';

const Practice = ({ selectedCharacter }) => {
  selectedCharacter === 'ka'
    ? useTitle('Katakana | Practice')
    : useTitle('Hiragana | Practice');
  const { t } = useTranslation();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [audioWaveVisibility, setAudioWaveVisibility] = useState(false);
  const [practiceType, setPracticeType] = useState('all');
  const [practiceTypeDesc, setPracticeTypeDesc] = useState('');
  const [delay, setDelay] = useState(3);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(6);
  const [isFromSelected, setIsFromSelected] = useState(true);
  const [isToSelected, setIsToSelected] = useState(true);
  const [range, setRange] = useState([]);
  const [shuffledItems, setShuffledItems] = useState([]);

  const getFavorites = () =>
    JSON.parse(localStorage.getItem(`${selectedCharacter}Favorites`));

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (practiceType) {
      case 'all':
        shaffleAndPlay(_.without(_.range(1, 47), 37, 39, 47, 48, 49));
        setPracticeTypeDesc(t('practice.practiceTypeA'));
        break;
      case 'favorites':
        shaffleAndPlay(getFavorites());
        setPracticeTypeDesc(t('practice.practiceTypeB'));
        break;
      case 'range':
        shaffleAndPlay(_.without(range, 37, 39, 47, 48, 49));
        setPracticeTypeDesc(t('practice.practiceTypeC'));
        break;
    }

    setModalVisibility(false);
    setAudioWaveVisibility(true);
    savePracticePatternToCookie();
  };

  const savePracticePatternToCookie = () => {
    Cookies.set('practiceType', practiceType);
    Cookies.set('delay', delay);

    if (practiceType === 'range') Cookies.set('range', JSON.stringify(range));
  };

  const getPracticePatternFromCookie = () => {
    let _practiceType = Cookies.get('practiceType');
    let _delay = Cookies.get('delay');
    let _range = Cookies.get('range');
    if (_range) _range = JSON.parse(_range);

    if (_practiceType) setPracticeType(_practiceType);
    if (_delay) setDelay(parseInt(_delay));
    if (_range) setRange(_range);
  };

  const shaffleAndPlay = (arr) => {
    let shuffled = _.shuffle(arr);
    shuffled = ['started', ...shuffled, 'finished'];
    setShuffledItems(shuffled);

    shuffled.forEach((name, index) => {
      setTimeout(() => {
        if (name === 'started' || name === 'finished') playAudio(name);
        else playAudioWave(name);
      }, delay * index * 1000);
    });
  };

  const handlePracticeTypeSelect = (value) => setPracticeType(value);

  const handleDelaySelect = (value) => setDelay(value);

  const handleCharacterClick = (item) => {
    if (!isFromSelected) {
      setFrom(item);
      setIsFromSelected(true);
      setRange([item]);
    } else if (isFromSelected) {
      setTo(item);
      setIsToSelected(true);
      setRange(_.range(from, item + 1));
      if (from > item) setRange(_.range(item, from + 1));
    }
    if (isFromSelected && isToSelected) {
      setTo(0);
      setFrom(item);
      setIsFromSelected(true);
      setIsToSelected(false);
      setRange([item]);
    }
  };

  const handleModal = () =>
    modalVisibility ? setModalVisibility(false) : setModalVisibility(true);

  const handleModalClose = () => setModalVisibility(false);

  useEffect(() => {
    setRange(_.range(from, to + 1));
    getPracticePatternFromCookie();
  }, []);

  return (
    <div className="container mx-auto mb-10">
      <div className="text-center">
        <div className="block mt-3">
          <button
            onClick={handleModal}
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>{' '}
            {t('practice.setupButton')}
          </button>

          <div className={`outer mt-5 ${audioWaveVisibility ? '' : 'hidden'}`}>
            <label className="text-sm mb-2">
              {t('practice.practicingTypeDesc')} {practiceTypeDesc}
            </label>
            <div id="waveform" className="max-w-sm h-6 border-y-2 inner"></div>
          </div>
        </div>

        <div className="w-full mt-3" style={{ zIndex: 99 }}>
          {shuffledItems &&
            shuffledItems.map((item, index) => {
              if (item === 'started' || item === 'finished') return null;

              return (
                <React.Fragment key={item}>
                  <figure className="border-4 m-1 rounded-lg border-indigo-200 inline-block p-2 w-12 lg:w-14">
                    <img
                      alt={item}
                      src={require(`../../public/data/characters/imgs/${selectedCharacter}/${item}.png`)}
                    />
                  </figure>
                  {(index + 1) % 5 === 0 && <br />}
                </React.Fragment>
              );
            })}
        </div>
      </div>

      <div className={`${modalVisibility ? '' : 'hidden'}`}>
        <div className="fixed right-0 left-0 top-0 bottom-0 z-50 mx-auto flex h-full items-center justify-center overflow-y-auto overflow-x-hidden shadow-2xl  backdrop-blur-sm backdrop-contrast-50 md:inset-0 firefox:bg-gray-200">
          <div className="relative w-full h-auto max-w-lg px-2">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <div className="flex justify-end p-2">
                <button
                  onClick={handleModalClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
              <form
                onSubmit={handleSubmit}
                className="px-6 pb-4 space-y-4 lg:px-8 sm:pb-6 xl:pb-8">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  {t('practice.modal.title')}{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </h3>
                <span className="text-xs text-red-500 font-semibold">
                  {t('practice.modal.howToPractice')}
                </span>
                <div className="">
                  <label
                    htmlFor="practice"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('practice.modal.typeOfPractice')}
                  </label>
                  <div className="flex flex-row justify-start gap-2">
                    <CustomRadioButton
                      value="all"
                      selected={practiceType}
                      label={t('practice.modal.all')}
                      description="46 chars"
                      onClick={handlePracticeTypeSelect}
                    />
                    <CustomRadioButton
                      value="favorites"
                      selected={practiceType}
                      label={t('practice.modal.favorites')}
                      description={`${getFavorites().length} chars`}
                      onClick={handlePracticeTypeSelect}
                    />
                    <CustomRadioButton
                      value="range"
                      selected={practiceType}
                      label={t('practice.modal.range')}
                      description="Select range"
                      onClick={handlePracticeTypeSelect}
                    />
                  </div>
                </div>
                {practiceType === 'range' && (
                  <div>
                    <div className="relative w-full text-center">
                      {_.range(1, 52).map((item, index) => {
                        if (
                          item === 37 ||
                          item === 39 ||
                          item === 47 ||
                          item === 48 ||
                          item === 49
                        ) {
                          return (
                            <img
                              alt={item}
                              key={item}
                              src={skipCharacter}
                              className="hidden border-2 m-0.5 rounded-lg border-white-200 p-1 w-6 lg:w-9"
                            />
                          );
                        }

                        return (
                          <img
                            key={item}
                            alt={item}
                            src={require(`../../public/data/characters/imgs/${selectedCharacter}/${item}.png`)}
                            onClick={() => handleCharacterClick(item)}
                            className={`border-2 m-0.5 rounded-lg border-indigo-200 inline-block p-1 w-7 lg:w-9 cursor-pointer ${
                              _.includes(range, item) && 'bg-indigo-200'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className="ml-2">
                  <label
                    htmlFor="delay"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {t('practice.modal.delay')}
                  </label>
                  <div className="flex flex-row justify-start gap-2">
                    <CustomRadioButton
                      value={3}
                      selected={delay}
                      label="3"
                      onClick={handleDelaySelect}
                    />
                    <CustomRadioButton
                      value={5}
                      selected={delay}
                      label="5"
                      onClick={handleDelaySelect}
                    />
                    <CustomRadioButton
                      value={7}
                      selected={delay}
                      label="7"
                      onClick={handleDelaySelect}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full font-bold text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                  {t('practice.modal.startButton')}{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
