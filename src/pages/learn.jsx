import React, { useState } from 'react';
import _ from 'lodash';
import skipCharacter from '../assets/skip-character.png';

const Learn = () => {
  const [gifNumber, setGifNumber] = useState(1);

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
                    className="inline-block border p-2 w-12 lg:w-12"
                  />
                );
              }

              return (
                <React.Fragment key={item}>
                  <img
                    alt={item}
                    src={require(`../../public/data/characters/imgs/${item}.png`)}
                    onClick={() => setGifNumber(item)}
                    title="Click to listen"
                    className="inline-block border p-1 w-12 lg:w-12 cursor-pointer"
                  />
                  {(index + 1) % 5 === 0 && <br />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className="w-32 mt-7 mb-3 mx-auto md:mx-0 md:order-2">
          {gifNumber > 0 && (
            <img
              alt={gifNumber}
              src={require(`../../public/data/characters/gifs/${gifNumber}.gif`)}
              className="border-4 rounded-lg border-green-300 shadow-none md:shadow-xl"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Learn;
