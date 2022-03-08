import React from 'react';
import { createContext } from 'react';
import BoardType from '../Types/BoardType';
import TaskItemType from '../Types/TaskItemType';

interface contextType {
  boards: BoardType[];
  handleTaskMoving: (
    boardIndex: number,
    taskIndex: number,
    task: TaskItemType,
    direction: number
  ) => void;
  handleTaskAdding: (boardIndex: number, task: TaskItemType) => void;
}

export const BoardContext = createContext<contextType>({} as contextType);

const defaultBoards: BoardType[] = [
  { name: 'Winnie', tasks: [{ name: 'Buy eggs' }] },
  { name: 'Brad', tasks: [{ name: 'Buy vegi' }] },
  { name: 'Bob', tasks: [{ name: 'Buy eggs' }] },
  { name: 'Thomas ', tasks: [{ name: 'Buy ham' }] },
];

export const BoardContextComponent: React.FC = ({ children }) => {
  const boards = React.useState<BoardType[]>(defaultBoards);

  const handleTaskMoving = (
    boardIndex: number,
    taskIndex: number,
    task: TaskItemType,
    direction: number
  ) => {
    const [, setBoards] = boards;

    const targetBoardIndex = boardIndex + direction;

    setBoards((prevBoards) => {
      const newBoards = prevBoards.map((board, index) => {
        if (index === targetBoardIndex) {
          // board to insert the task
          const { tasks } = board;
          tasks.splice(taskIndex, 0, task);

          const newBoard = { ...board, tasks };
          return newBoard;
        }

        if (index === boardIndex) {
          // board to remove the task from
          const { tasks } = board;
          tasks.splice(taskIndex, 1);

          const newBoard = { ...board, tasks };
          return newBoard;
        }

        return board;
      });

      return newBoards;
    });
  };

  const handleTaskAdding = (boardIndex: number, task: TaskItemType) => {
    const [, setBoard] = boards;

    setBoard((prevBoards) => {
      const newBoards = prevBoards.map((board, i) => {
        if (i === boardIndex) {
          board.tasks.push(task);
          return board;
        }

        return board;
      });

      return newBoards;
    });
  };

  const state = {
    boards: boards[0],
    handleTaskMoving,
    handleTaskAdding,
  };

  return (
    <BoardContext.Provider value={state}>{children}</BoardContext.Provider>
  );
};
