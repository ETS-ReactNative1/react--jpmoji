import React from 'react';

const Favorite = ({ label = 'Favorite', checked, onChange }) => {
  return (
    <label
      htmlFor="toggle-example"
      className="flex relative items-center mb-4 cursor-pointer mt-3">
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        id="toggle-example"
        className="sr-only"
        title="Favorite/Unfavorite"
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
      <span className="ml-3 text-xs font-semibold overflow-x-auto text-gray-900 dark:text-gray-300">
        {label}
      </span>
    </label>
  );
};

export default Favorite;
