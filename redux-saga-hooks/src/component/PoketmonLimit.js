import React from 'react';

const pages = [20, 50, 100];

const PoketmonLimit = ({changePage}) => {
  return (
    <select onChange={changePage}>
      {pages.map((page) => (
        <option key={page} value={page}>
          {page}
        </option>
      ))}
    </select>
  );
};

export default PoketmonLimit;
