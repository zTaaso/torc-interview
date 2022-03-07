import React from 'react';

import Board from '../../components/Board';

import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <Board title="Winnie" />
      <Board title="Brad" />
      <Board title="Bob" />
      <Board title="Thomas" />
    </S.Container>
  );
}

export default Home;
