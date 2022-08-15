import { createContext, useEffect, useState } from 'react';
interface IColorContext {
  color: string;
  onColorBlue: () => void;
  resetColor: () => void;
}
export const ColorContext = createContext<IColorContext>({
  color: 'white',
  onColorBlue: () => {},
  resetColor: () => {},
});

export const ColorState = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState('white');
  useEffect(() => {
    setTimeout(() => {
        setColor('yellow');
      }, 1500);
    
  }, [])


  function onColorBlue() {
    setColor('blue');
  }

  function resetColor() {
    setColor('white');
  }

  return (
    <ColorContext.Provider value={{ color, onColorBlue, resetColor }}>
      {children}
    </ColorContext.Provider>
  );
};
