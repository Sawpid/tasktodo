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


  return { 
    boardData, 
    setBoardData,
    editBoard, 
    toggleEditBoard
    }
}