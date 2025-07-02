
import React from "react";

const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`rounded-2xl p-6 shadow-md border dark:border-gray-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
