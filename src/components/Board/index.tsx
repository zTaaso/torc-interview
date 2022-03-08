import React from 'react';
import { BoardContext } from '../../context/BoardItems';
import BoardType from '../../Types/BoardType';
import TaskItemType from '../../Types/TaskItemType';

import ItemsList from '../ItemsList';
import TodoItem from '../TodoItem';

import * as S from './styles';

interface BoardTypes {
  board: BoardType;
  boardIndex: number;
}

const defaultTasks = [
  { name: 'Buy eggs' },
  { name: 'Buy milk' },
  { name: 'Buy vegi' },
];

const Board: React.FC<BoardTypes> = ({ board, boardIndex }) => {
  const context = React.useContext(BoardContext);

  const [, setTasks] = React.useState([] as TaskItemType[]);

  const handleAddTask = () => {
    const newTask = prompt('Name of the task:');

    if (!newTask) return;

    context.handleTaskAdding(boardIndex, { name: newTask });
  };

  React.useEffect(() => {
    // this is intended to force a rerender and update correctly the tasks
    setTasks(board.tasks);
  }, [context.boards]);

  return (
    <S.Container>
      <S.Header>{board.name}</S.Header>
      <ItemsList>
        {board.tasks.map((item, i) => (
          <TodoItem item={item} boardIndex={boardIndex} taskIndex={i} key={i} />
        ))}
      </ItemsList>

      <button onClick={handleAddTask}>Add Task</button>
    </S.Container>
  );
};
export default Board;
