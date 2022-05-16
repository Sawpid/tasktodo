export const baseUserMask = {
    last_name: { 
        value: "", 
        label: "Фамилия",
        type: "text",
        mask: /^[а-яА-ЯёЁ-\s]{2,}$/, 
        isInvalid: false, 
        isValid: false
    },
    first_name: { 
        value: "", 
        label: "Имя",
        type: "text",
        mask: /^[а-яА-ЯёЁ-\s]{2,}$/, 
        isInvalid: false, 
        isValid: false
    },
    username: { 
        value: "", 
        label: "Имя пользователя",
        type: "text",
        mask: /^[a-z0-9_-]{3,16}$/, 
        isInvalid: false, 
        isValid: false
    },
    email: {
        value: "",
        label: "Эл. почта",
        type: "email",
        mask: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
        isInvalid: false,
        isValid: false
    },
    password: { 
        value: "", 
        label: "Пароль",
        type: "password",
        mask: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,25}$/, 
        isInvalid: false, 
        isValid: false
    },
    confirm_password: { 
        value: "", 
        label: "Повторите пароль",
        type: "password",
        mask: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,25}$/, 
        isInvalid: false, 
        isValid: false
    },
}