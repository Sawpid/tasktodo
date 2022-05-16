import { useCallback, useState, useEffect } from 'react';
import { devBoardData, defaultTaskData, filterBoard } from "../model/boardData"

const storageName = 'boardData'

export const useBoard = () => {
  const [taskId, taskIdState] = useState(1);
  const [boardId, setBoradId] = useState(null)
  const [boardName, setBoardName] = useState("TaskToDo Доска")
  const [boardDescription, setBoardDescription] = useState("Перетащите задачу в столбец с нужным статусом")
  const [boardData, setBoardData] = useState(devBoardData);
  const [boardFilter, setFilter] = useState(filterBoard);

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

    const setFilterBoard = (e, name) => {
      if (name){
        const value = (e === null)? -1 : e.value
        setFilter(prev => ({...prev, [name]: value}))
      }else{
        setFilter(prev => ({...prev, [e.target.name]: e.target.value}))
      }
    }

    useEffect(() => {
      
      setBoardData((sourceList) => {
        let tempList = [...sourceList];
        tempList.map(i => {
          let setHidden = false
          i.data.map(item => {
            if (boardFilter.search !== ""){
              if (item["name"].includes(boardFilter.search) || item["text"].includes(boardFilter.search)){
                setHidden = false
              }else{
                setHidden = true
              }
            }
            if (boardFilter.member !== -1){
              if (item["members"].includes(boardFilter.member)) {
                setHidden = false
              }else{
                setHidden = true
              }
            }
            item.hidden = setHidden
          })
        })
        return tempList;
      })
    }, [boardFilter])


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

    const updateTask = (e, idx, id, name) => {
      console.log("update");
      setBoardData((sourceList) => {
        const tempList = [...sourceList];
        const col = tempList.find(elem => elem.id === id)
        const task = tempList[idx].data.find(elem => elem.id === id)
        if (name){
          task[name] = e;
        }else{
          task[e.target.name] = e.target.value;
        }
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
          currentList.map(el => el.status = boardData[idx].id)
          lastArr[lastIndex]["data"] = currentList;
          return tempList;
      })
  }


  return { 
    addTask,
    moveTask,
    updateTask,
    setFilter,
    boardFilter,
    setFilterBoard,
    boardData, 
    setBoardData,
    editBoard, 
    toggleEditBoard,
    deleteTask, 
    }
}