import React from 'react';
import { BoardContextComponent } from './context/BoardItems';

import Home from './pages/Home';

function App() {
  return (
    <BoardContextComponent>
      <Home />
    </BoardContextComponent>
  );
}

export default App;
