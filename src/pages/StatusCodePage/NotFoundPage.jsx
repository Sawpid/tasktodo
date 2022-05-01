import React from "react"
import { Link } from "react-router-dom";

function NotFoundPage() {

    return (
        <div className="d-flex align-items-center justify-content-center text-light vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> 
                    <span className="text-danger">Упс!</span> 
                    <span> Страница не найдена.</span>
                </p>
                <p className="lead">
                    Страница, которую вы ищете, не существует.
                  </p>
                <Link to="/" className="btn btn-primary shadow-btn rounded-pill">На главную</Link>
            </div>
        </div>
    )
}
export default NotFoundPage;