import React, {useContext} from "react"
import { ToastContainer, Toast } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { MessageContext } from "../../hooks/context.hook"

function ToastUi() {
    const {toast, hideToast} = useContext(MessageContext)
    return (
    <ToastContainer position="top-end" className="sticky-top p-3 mt-5" style={{zIndex:1055}}>
        {toast.map((m,idx) => (
            <Toast onClose={() => hideToast(idx)} show={m.status} delay={6000} autohide>
                <Toast.Header>
                    <FontAwesomeIcon icon={faTriangleExclamation} className="me-2"/>
                    <strong className="me-auto">Сообщение</strong>
                    <small className="text-muted">{m.date}</small>
                </Toast.Header>
                <Toast.Body>{m.message}</Toast.Body>
            </Toast>
        ))}
    </ToastContainer>
    )
}
export default ToastUi;