import React from "react";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthPage from './pages/AuthPage/AuthPage';
import BoardPage from './pages/BoardPage/BoardPage';
import SignInAuth from './components/auth/SignInAuth';
import SignUpAuth from './components/auth/SignUpAuth';
import NotFoundPage from "./pages/StatusCodePage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth/signin" />}/>
        <Route path="*" element={<NotFoundPage />}/>
        <Route path="/board" element={<BoardPage />}>
          <Route path="explore" element={<BoardPage />} />
          <Route path=":username" element={<BoardPage />} >
            <Route path=":boardname" element={<BoardPage />} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthPage />}>
          <Route path="signin" element={<SignInAuth />} />
          <Route path="signup" element={<SignUpAuth />} />
          <Route path="forgot" />
          <Route path="logout" />
          <Route path="*" element={<Navigate replace to="signin" />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
