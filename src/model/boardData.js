
let colId = 0;

// export const createId = () => {colId++; taskId++;}

export const devBoardData = [
    {
        "id": colId++,
        "name": "Задачи",
        "description": "Поставленные задачи",
        "type": 1,
        "data": []
    },
    {
        "id": colId++,
        "name": "В процессе",
        "description": "Задачи в стадии разработки",
        "type": 0,
        "data": []
    },
    {
        "id": colId++,
        "name": "Тестирование",
        "description": "Задачи на стадии рассмотрения",
        "type": 0,
        "data": []
    },
    {
        "id": colId++,
        "name": "Завершено",
        "description": "Завершенные задачи",
        "type": 0,
        "data": []
    },
]

export const defaultTaskData = (id) => {
    return {
        "id": id,
        "text": "",
        "progress": 0
    }
}