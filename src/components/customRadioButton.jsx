import React from 'react';

const CustomRadioButton = ({
  label,
  value,
  selected,
  description,
  onClick,
}) => {
  const isSelected = value === selected;

  return (
    <div
      onClick={() => onClick(value)}
      className={`py-2 px-3 md:px-4 bg-white cursor-pointer rounded-lg font-medium border-4 border-white-300 
      ${isSelected && 'border-indigo-400'}`}>
      <div className="flex justify-between items-center">
        <span>{label}</span>
        {isSelected && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="#6875f5">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <small className="text-green-500 text-xs hidden md:inline-block">
        {description}
      </small>
    </div>
  );
};

export default CustomRadioButton;
