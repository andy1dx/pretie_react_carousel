import React from "react";
import './Dots.css'

type Props = {
  items: number;
  active: number;
  onClick: (active: number) => void;
};

const Dots = React.memo<Props>(({ items, active, onClick }) => {
  return (
    <ul className='pretie-dot_list'>
      {Array.from(Array(items).keys()).map((dot: number) => (
        <li
          key={dot}
          className={active === dot ? 'active' : 'dot'}
          onClick={() => onClick(dot)}
        />
      ))}
    </ul>
  );
});

export default Dots;
