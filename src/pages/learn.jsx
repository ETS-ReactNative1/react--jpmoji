import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import Favorite from '../components/favorite';
import skipCharacter from '../assets/skip-character.png';
import playAudio from '../utils/playAudio';

const Learn = () => {
  const [gifNumber, setGifNumber] = useState(1);
  const [favorite, setIsFavorite] = useState(false);

  const handleCharacterClick = (item) => {
    playAudio(item);
    showGif(item);
    updateFavoriteToggleState(item);
  };

  const showGif = (item) => setGifNumber(item);

  const updateFavoriteToggleState = (item) =>
    _.includes(getFavorites(), item)
      ? setIsFavorite(true)
      : setIsFavorite(false);

  const handleFavorite = (e) => {
    setIsFavorite(true);
    if (e.target.checked) {
      const prevFavorites = getFavorites();
      setFavorites([...prevFavorites, gifNumber]);
    } else {
      setIsFavorite(false);
      removeFromFavorite(gifNumber);
    }
  };

  function removeFromFavorite(item) {
    const favorites = getFavorites();
    const updatedFavorites = _.without(favorites, item);
    setFavorites(updatedFavorites);
  }

  const initializeFavorites = () =>
    localStorage.setItem('favorites', JSON.stringify([]));

  const getFavorites = () => JSON.parse(localStorage.getItem('favorites'));

  const setFavorites = (arr) =>
    localStorage.setItem('favorites', JSON.stringify(arr));

  const isItemInFavorite = (item) => _.includes(getFavorites(), item);

  useEffect(() => {
    if (!('favorites' in localStorage)) initializeFavorites();
    updateFavoriteToggleState(gifNumber);
  }, []);

  return (
    <div className="container mx-auto mb-10">
      <div className="flex flex-col md:flex-row md:mt-5 justify-center">
        <div className="order-2 md:order-1 text-center mr-3">
          <span className="text-gray-600 text-xs leading-none">
            Click the character to learn, and make sure speaker is on.
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
                    className="border-4 m-1 rounded-lg border-indigo-200 inline-block p-2 w-12 lg:w-14"
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
                    className={`border-4 hover:p-1 m-1 rounded-lg border-indigo-200 inline-block p-2 w-12 lg:w-14 cursor-pointer ${
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
                src={require(`../../public/data/characters/gifs/${gifNumber}.gif`)}
                className="border-4 rounded-lg border-indigo-300 shadow-none md:shadow-xl"
              />
            )}
          </div>
          <Favorite
            label={favorite ? 'Favorited' : 'Favorite ?'}
            checked={favorite}
            onChange={handleFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default Learn;
