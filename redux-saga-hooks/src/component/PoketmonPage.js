import React from 'react';

const PoeketmonPage = ({page, next, prev}) => {
  return (
    <div>
      <div>page : {page}</div>
      <div>
        <button onClick={next}>+</button>
        <button onClick={prev}>-</button>
      </div>
    </div>
  );
};

export default PoeketmonPage;
