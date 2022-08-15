import { useContext } from 'react';
import { ColorContext } from '../context/context';

const BtnClassName = 'px-3 py-1 border text-sm mt-3 rounded-md';

const ComponentC = () => {
  const { color, onColorBlue, resetColor } = useContext(ColorContext);
  const styles = { color };

  return (
    <>
      <p style={styles}>Component C</p>
      {color === 'blue' ? (
        <button onClick={resetColor} className={BtnClassName}>
          reset
        </button>
      ) : (
        <button onClick={onColorBlue} className={BtnClassName}>
          blue
        </button>
      )}
    </>
  );
};

export { ComponentC };
