import React from 'react';

import Board from '../../components/Board';
import { BoardContext } from '../../context/BoardItems';

import * as S from './styles';

function Home() {
  const { boards } = React.useContext(BoardContext);

  return (
    <S.Container>
      {boards.map((board, i) => (
        <Board board={board} boardIndex={i} key={i} />
      ))}
    </S.Container>
  );
}

export default Home;
