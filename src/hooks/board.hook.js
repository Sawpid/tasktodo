import { useCallback, useState } from 'react';
import { devBoardData, defaultTaskData } from "../model/boardData"

const storageName = 'boardData'

export const useBoard = () => {
    const [taskId, taskIdState] = useState(1);
    const [boardId, setBoradId] = useState(null)
    const [boardName, setBoardName] = useState("TaskToDo Доска")
    const [boardDescription, setBoardDescription] = useState("Перетащите задачу в столбец с нужным статусом")
    const [boardData, setBoardData] = useState(devBoardData);

    const [editBoard, setEditBoard] = useState(false);

    const toggleEditBoard = () => setEditBoard(!editBoard);

    const addTask = (idx) => {
      console.log("add");
      taskIdState(taskId+1);
      const taskData = defaultTaskData(taskId);
      let isAdd = true;
      setBoardData((sourceList) => {
        const tempList = [...sourceList];
          if (isAdd){
            tempList[idx].data.push(taskData);
            isAdd = false;
          }
          return tempList;
        })
    }

    const deleteTask = (idx, id) => {
      console.log("delete");
      setBoardData((sourceList) => {
        let tempList = [...sourceList];
        const task = tempList[idx].data.find(elem => elem.id === id)
        const arr = tempList[idx].data.filter(item => item !== task);
        tempList[idx].data = arr;
        return tempList;
      })
    }

    const updateTask = (e, idx, id) => {
      console.log("update");
      setBoardData((sourceList) => {
        const tempList = [...sourceList];
        const task = tempList[idx].data.find(elem => elem.id === id)
        task[e.target.name] = e.target.value;
        return tempList;
      });
    };
    
    const moveTask = (currentList, idx) => {
      console.log("move");
      setBoardData((sourceList) => {
          const tempList = [...sourceList];
          const _blockIndex = [...[idx]];
          const lastIndex = _blockIndex.pop();
          const lastArr = _blockIndex.reduce(
            (arr, i) => arr[i]["data"],
            tempList
          );
          lastArr[lastIndex]["data"] = currentList;
          return tempList;
      })
  }


  return { 
    addTask,
    moveTask,
    updateTask,
    boardData, 
    setBoardData,
    editBoard, 
    toggleEditBoard,
    deleteTask, 
    }
}