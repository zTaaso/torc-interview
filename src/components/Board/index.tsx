import React from 'react';
import { BoardContext } from '../../context/BoardItems';

import ItemsList from '../ItemsList';
import TodoItem from '../TodoItem';

import * as S from './styles';

interface BoardTypes {
  title: string;
}

const defaultTasks = [
  { name: 'Buy eggs' },
  { name: 'Buy milk' },
  { name: 'Buy vegi' },
];

const Board: React.FC<BoardTypes> = ({ title }) => {
  const context = React.useContext(BoardContext);

  const [tasks, setTasks] = React.useState(defaultTasks);

  const handleAddTask = () => {
    const newTask = prompt('Name of the task:');

    if (!newTask) return;

    setTasks((prevTasks) => [...prevTasks, { name: newTask }]);
  };

  React.useEffect(() => {}, [tasks]);

  return (
    <S.Container>
      <S.Header>{title}</S.Header>
      <ItemsList>
        {tasks.map((item) => (
          <TodoItem item={item} />
        ))}
      </ItemsList>

      <button onClick={handleAddTask}>Add Task</button>
    </S.Container>
  );
};
export default Board;
