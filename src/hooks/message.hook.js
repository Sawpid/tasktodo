import { useState } from 'react';

export const useToast = () => {

    const [toast, setToast] = useState([{type:0, message:"", date:"", status:false}]);
    const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false })

    const hideToast = (idx) => {
        const toastH = [...toast];
        toastH[idx]["status"] = false
        setToast(toastH)
        console.log(toast)
    }

    const showToast = (msg) => {
        let message = "Ошибка!"
        if (msg){
            message = msg
        }
        setToast(prew => (
            [...prew, {type:0, message:message.toString(), date:getTime, status:true}]
        ))
    }

    return {
        toast, showToast, hideToast
    }
}