let tagId = 0;
let skillsId = 0;
let memberId = 0;
let accessId = 0;
let templateId = 0;

export const baseSkills = [
    { value: skillsId++, label: 'JavaScript', color: 'primary' },
    { value: skillsId++, label: 'JQuery', color: 'dark' },
    { value: skillsId++, label: 'React', color: 'info' },
    { value: skillsId++, label: 'Vue.js', color: 'success' },
    { value: skillsId++, label: 'Nuxt.js', color: 'success' },
    { value: skillsId++, label: 'AngularJS', color: 'danger' },
    { value: skillsId++, label: 'HTML', color: 'danger' },
    { value: skillsId++, label: 'CSS', color: 'primary' },
    { value: skillsId++, label: 'UI/UX', color: 'primary' },
    { value: skillsId++, label: 'Дизайн', color: 'primary' },
    { value: skillsId++, label: 'Frontend', color: 'light' },

    { value: skillsId++, label: 'Java', color: 'light' },
    { value: skillsId++, label: 'Scala', color: 'danger' },
    { value: skillsId++, label: '.NET Framework', color: 'primary' },
    { value: skillsId++, label: 'PHP', color: 'info' },
    { value: skillsId++, label: 'CodeIgniter', color: 'danger' },
    { value: skillsId++, label: 'Slim Framework', color: 'success' },
    { value: skillsId++, label: 'Laravel', color: 'danger' },
    { value: skillsId++, label: 'Node.js', color: 'success' },
    { value: skillsId++, label: 'C Sharp', color: 'success' },
    { value: skillsId++, label: 'Go Lang', color: 'info' },
    { value: skillsId++, label: 'Python', color: 'info' },
    { value: skillsId++, label: 'Django', color: 'dark' },
    { value: skillsId++, label: 'Flask', color: 'dark' },
    { value: skillsId++, label: 'Backend', color: 'dark' },
]

export const templateBoard = [
    { value: templateId++, label: 'Доска разработчика (В процессе, Тестирование, Завершено)' },
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
    { value: memberId++, label: 'Владимиров Ян', name:'vovavv', avatar: '' },
    { value: memberId++, label: 'Порошин Аркадий', name:'dzety', avatar: '' },
    { value: memberId++, label: 'Семенова Юлия', name:'juluia', avatar: '' },
]