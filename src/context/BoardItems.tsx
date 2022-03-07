import React from 'react';
import { createContext } from 'react';

export const BoardContext = createContext([]);

export const BoardContextComponent: React.FC = ({ children }) => {
  const [value, setValue] = React.useState([]);

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};
