
let colId = 0;
let tagId = 0;
let memberId = 0;
let accessId = 0;
let templateId = 0;

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

export const headBoard = (id) => {

}

export const defaultTaskData = (id) => {
    return {
        "id": id,
        "status": 0,
        "name": "",
        "text": "",
        "tags":[],
        "members":[0],
        "progress": 0,
        "creator_user":0,
        "create_date":getСurrentDate(),
        "update_date":getСurrentDate(),
    }
}

export const templateBoard = [
    { value: templateId++, label: 'Доска разработчика (В процессе, Тестирование, Завершено)', board: 1 },
];


export const viewAccessLevel = [
    { value: accessId++, label: 'Публичный', description: 'Разрешить всем пользователям просматривать ваш проект' },
    { value: accessId++, label: 'По ссылке', description: 'Проект не будет отображаться в поиске и вашем профиле' },
    { value: accessId++, label: 'Приватный', description: 'Только участники вашего проекта могут просматривать ваш проект' },
];

export const baseTags = [
    { value: tagId++, label: 'Срочно', color: 'warning' },
    { value: tagId++, label: 'Отложено', color: 'info' },
    { value: tagId++, label: 'Ошибка', color: 'danger' },
    { value: tagId++, label: 'Дизайн', color: 'secondary' },
    { value: tagId++, label: 'Разработка', color: 'primary' },
    { value: tagId++, label: 'Улучшение', color: 'success' },
    { value: tagId++, label: 'Тестирование', color: 'dark' },
]

export const sampleMembers = [
    { value: memberId++, label: 'Вернигора Сергей', name:'rehill', avatar: '' },
    { value: memberId++, label: 'Петров Артем', name:'perov', avatar: '' },
    { value: memberId++, label: 'Плотников Кирилл', name:'kirill-zxc', avatar: '' },
    { value: memberId++, label: 'Владимир Путин', name:'vovavv', avatar: '' },
    { value: memberId++, label: 'Порошин Аркадий', name:'dzety', avatar: '' },
    { value: memberId++, label: 'Семенова Юлия', name:'juluia', avatar: '' },
]

function getСurrentDate(){
    const date = new Date();
    return (
        date.toLocaleDateString()
        + " " +
        date.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false })
    )
}