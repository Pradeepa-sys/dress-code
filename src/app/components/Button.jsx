import React from 'react';

const Button = ({ children, className = '', onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-md font-medium transition duration-300 bg-red-600 text-white my-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
