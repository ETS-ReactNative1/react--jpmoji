import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import _ from 'lodash';
import { Scrollbars } from 'react-custom-scrollbars-2';
import playAudio from '../utils/playAudio';
import skipCharacter from '../assets/skip-character.png';
import CustomRadioButton from '../components/customRadioButton';

const PracticeNew = () => {
  //   const [practiceType, setPracticeType] = useState('');
  //   const [practiceTypeText, setPracticeTypeText] = useState('');
  //   const [delay, setDelay] = useState(3);
  //   const [delayText, setDelayText] = useState('');
  const [shuffledItems, setShuffledItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (practiceType === 'all') {
      let allCharacters = _.range(1, 47);
      let characters = _.without(allCharacters, 37, 39, 47, 48, 49);
      const shuffledRange = _.shuffle(characters);
      setShuffledItems(shuffledRange);

      shuffledRange.forEach((name, index) =>
        setTimeout(() => playAudio(name), delay * index * 1000)
      );
    }
  };

  //   const handlePracticeOptionChange = (selected) => {
  //     const a = selected.value;
  //     if (a === 'all') {
  //       setPracticeTypeText('46 characters chars');
  //     } else if (a === 'favorites') {
  //       setPracticeTypeText(getFavorites().length + ' characters chars');
  //     } else {
  //       setPracticeTypeText('');
  //     }
  //     setPracticeType(a);
  //   };

  //   const handleDelayChange = (selected) => {
  //     setDelay(selected.value);
  //     setDelayText(
  //       'Next character will come after ' + selected.value + ' seconds.'
  //     );
  //   };

  const getFavorites = () => JSON.parse(localStorage.getItem('favorites'));

  const [practiceType, setPracticeType] = useState('all');
  const [delay, setDelay] = useState(3);
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(6);
  const [isFromSelected, setIsFromSelected] = useState(true);
  const [isToSelected, setIsToSelected] = useState(true);
  const [range, setRange] = useState([]);

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

  useEffect(() => {
    setRange(_.range(from, to + 1));
    console.log(range);
  }, []);

  return (
    <div className="container mx-auto mb-10">
      <div className="text-center">
        <div className="block">
          <button
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            type="button"
            data-modal-toggle="authentication-modal">
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
            Define Practice Setting
          </button>
        </div>

        <div className="w-full mt-3" style={{ zIndex: 99 }}>
          {shuffledItems &&
            shuffledItems.map((item, index) => {
              return (
                <React.Fragment key={item}>
                  <figure className="border-4 m-1 rounded-lg border-indigo-200 inline-block p-2 w-12 lg:w-14">
                    <img
                      alt={item}
                      src={require(`../../public/data/characters/imgs/${item}.png`)}
                    />
                  </figure>
                  {(index + 1) % 5 === 0 && <br />}
                </React.Fragment>
              );
            })}
        </div>
      </div>

      <div
        id="authentication-modal"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
        <div className="relative px-2 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal">
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
              className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
              action="#">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Set up practice settings{' '}
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
              <div>
                <label
                  htmlFor="practice"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Specify type of practice
                </label>
                <div className="flex flex-row justify-start gap-2">
                  <CustomRadioButton
                    value="all"
                    selected={practiceType}
                    label="All"
                    description="46 chars"
                    onClick={handlePracticeTypeSelect}
                  />
                  <CustomRadioButton
                    value="favorites"
                    selected={practiceType}
                    label="Favorites"
                    description={`${getFavorites().length} chars`}
                    onClick={handlePracticeTypeSelect}
                  />
                  <CustomRadioButton
                    value="range"
                    selected={practiceType}
                    label="Range"
                    description="Select range"
                    onClick={handlePracticeTypeSelect}
                  />
                </div>
              </div>
              {practiceType === 'range' && (
                <Scrollbars
                  autoHeight
                  autoHeightMax={400}
                  autoHide
                  autoHideTimeout={1000}>
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
                              className="border-2 m-0.5 rounded-lg border-white-200 inline-block p-1 w-6 lg:w-8"
                            />
                          );
                        }

                        return (
                          <React.Fragment key={item}>
                            <img
                              alt={item}
                              src={require(`../../public/data/characters/imgs/${item}.png`)}
                              onClick={() => handleCharacterClick(item)}
                              title="Click to listen"
                              className={`border-2 m-0.5 rounded-lg border-indigo-200 inline-block p-1 w-6 lg:w-8 cursor-pointer ${
                                _.includes(range, item) && 'bg-indigo-200'
                              }`}
                            />
                            {(index + 1) % 5 === 0 && <br />}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </Scrollbars>
              )}
              <div>
                <label
                  htmlFor="delay"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Specify Delay (in seconds)
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
                className="w-full text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                Start{' '}
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
  );
};

export default PracticeNew;
