let colId = 0
export const boardTemplate = {
    0:  [
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
}