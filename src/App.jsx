import React from "react";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthPage from './pages/AuthPage/AuthPage';
import BoardPage from './pages/BoardPage/BoardPage';
import SignInAuth from './components/auth/SignInAuth';
import SignUpAuth from './components/auth/SignUpAuth';
import NotFoundPage from "./pages/StatusCodePage/NotFoundPage";
import UserProfilePage from "./pages/ProfilePage/UserProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/auth/signin" />}/>
        <Route path="*" element={<NotFoundPage />}/>
        <Route path="/explore" element={<BoardPage />} />

        <Route path="/:username" element={<UserProfilePage />} >
          <Route path="project" element={<UserProfilePage />} />
          <Route path="groups" element={<UserProfilePage />} />
          <Route path="settings" element={<UserProfilePage />} />
        </Route>

        <Route path=":username/:boardname" element={<BoardPage />} />

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
