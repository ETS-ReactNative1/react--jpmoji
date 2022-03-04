import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { useTitle } from 'react-use';
import { useTranslation } from 'react-i18next';
import Favorite from '../components/favorite';
import { playAudio } from '../utils/playAudio';
import skipCharacter from '../assets/skip-character.png';

const Learn = ({ selectedCharacter }) => {
  useTitle('Hiragana | Learn');
  const { t } = useTranslation();
  const [gifNumber, setGifNumber] = useState(1);
  const [favorite, setIsFavorite] = useState(false);

  const handleCharacterClick = (item) => {
    playAudio(item);
    showGif(item);
    updateFavoriteToggleState(item);
  };

  const showGif = (item) => setGifNumber(item);

  const updateFavoriteToggleState = (item) =>
    _.includes(getFavorites(selectedCharacter), item)
      ? setIsFavorite(true)
      : setIsFavorite(false);

  const handleFavorite = (e) => {
    setIsFavorite(true);
    if (e.target.checked) {
      const prevFavorites = getFavorites(selectedCharacter);
      setFavorites([...prevFavorites, gifNumber], selectedCharacter);
    } else {
      setIsFavorite(false);
      removeFavorite(gifNumber, selectedCharacter);
    }
  };

  function removeFavorite(item, type) {
    const favorites = getFavorites(type);
    const updatedFavorites = _.without(favorites, item);
    setFavorites(updatedFavorites, type);
  }

  const initializeFavorites = () => {
    localStorage.setItem('kaFavorites', JSON.stringify([]));
    localStorage.setItem('hiFavorites', JSON.stringify([]));
  };

  const getFavorites = (type) =>
    JSON.parse(localStorage.getItem(`${type}Favorites`)); // hiFavorites || kaFavorites

  const setFavorites = (arr, type) =>
    localStorage.setItem(`${type}Favorites`, JSON.stringify(arr));

  const isItemInFavorite = (item) =>
    _.includes(getFavorites(selectedCharacter), item);

  useEffect(() => {
    if (!('hiFavorites' in localStorage) || !('kaFavorites' in localStorage))
      initializeFavorites();
    updateFavoriteToggleState(gifNumber);
  }, []);

  return (
    <div className="container mx-auto mb-10">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="order-2 md:order-1 text-center mr-3">
          <span className="text-gray-600 text-xs leading-none">
            {t('learn.body.desc')}
          </span>
          <div className="relative w-full mt-1">
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
                    className="border-4 m-1 rounded-lg border-white-100 inline-block p-2 w-12 lg:w-10 xl:w-14"
                  />
                );
              }

              return (
                <React.Fragment key={item}>
                  <img
                    alt={item}
                    src={require(`../../public/data/characters/imgs/${selectedCharacter}/${item}.png`)}
                    onClick={() => handleCharacterClick(item)}
                    title="Click to listen"
                    className={`border-4 hover:p-1 m-1 rounded-lg border-indigo-200 inline-block p-2 w-12 lg:w-10 xl:w-14 cursor-pointer ${
                      isItemInFavorite(item) && 'bg-indigo-200'
                    }`}
                  />
                  {(index + 1) % 5 === 0 && <br />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="w-32 mt-7 mb-3 mx-auto md:mx-0 md:order-2">
          <div className="flex justify-center">
            {gifNumber > 0 && (
              <img
                alt={gifNumber}
                src={require(`../../public/data/characters/gifs/${selectedCharacter}/${gifNumber}.gif`)}
                className="border-4 rounded-lg border-indigo-300 shadow-none md:shadow-xl"
              />
            )}
          </div>
          <Favorite
            label={
              favorite ? t('learn.body.favorited') : t('learn.body.favorite')
            }
            checked={favorite}
            onChange={handleFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default Learn;
