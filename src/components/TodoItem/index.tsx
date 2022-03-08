import React from 'react';
import { BoardContext } from '../../context/BoardItems';

import TodoItemType from '../../Types/TaskItemType';

import * as S from './styles';

interface TodoItemTypes {
  item: TodoItemType;
  boardIndex: number;
  taskIndex: number;
}

const TodoItem: React.FC<TodoItemTypes> = ({ item, boardIndex, taskIndex }) => {
  const context = React.useContext(BoardContext);

  const handleMoveTask = (direction: number) => {
    context.handleTaskMoving(boardIndex, taskIndex, item, direction);
  };

  const canMoveLeft = boardIndex - 1 > -1;
  const canMoveRight = boardIndex + 1 < context.boards.length;

  return (
    <S.Container>
      <S.ArrowButton disabled={!canMoveLeft} onClick={() => handleMoveTask(-1)}>
        {' '}
        {'<'}{' '}
      </S.ArrowButton>
      <span>{item.name}</span>
      <S.ArrowButton disabled={!canMoveRight} onClick={() => handleMoveTask(1)}>
        {' '}
        {'>'}
      </S.ArrowButton>
    </S.Container>
  );
};

export default TodoItem;
