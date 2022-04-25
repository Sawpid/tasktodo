import { useCallback, useState } from 'react';
import { devBoardData } from "../model/boardData"

const storageName = 'boardData'

export const useBoard = () => {
    const [boardId, setBoradId] = useState(null)
    const [boardName, setBoardName] = useState("TaskToDo Доска")
    const [boardDescription, setBoardDescription] = useState("Перетащите задачу в столбец с нужным статусом")
    const [boardData, setBoardData] = useState(devBoardData);

    const [editBoard, setEditBoard] = useState(false);

    const toggleEditBoard = () => setEditBoard(!editBoard);

//     const handleChange = e => {
//       console.log( e.target.name);
//       const { name, value } = e.target;
//       setState(prevState => ({
//           ...prevState,
//           [name]: value
//       }));
//   };

    // const currentList = (sourceList) => {
    //   setBoardData((sourceList) => {
    //     const tempList = [...sourceList];
    //     const _blockIndex = [...[idx]];
    //     const lastIndex = _blockIndex.pop();
    //     const lastArr = _blockIndex.reduce(
    //       (arr, i) => arr[i]["data"],
    //       tempList
    //     );
    //     lastArr[lastIndex]["data"] = currentList;
    //     return tempList;
    //   });
    // }

  return { 
    boardData, 
    setBoardData, 
    // handleChange,
    editBoard, 
    toggleEditBoard
    }
}