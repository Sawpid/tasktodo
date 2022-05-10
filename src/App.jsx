import React from "react";
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthPage from './pages/AuthPage/AuthPage';
import BoardPage from './pages/BoardPage/BoardPage';
import SignInAuth from './components/auth/SignInAuth';
import SignUpAuth from './components/auth/SignUpAuth';
import NotFoundPage from "./pages/StatusCodePage/NotFoundPage";
import UserProfilePage from "./pages/ProfilePage/UserProfilePage";
import ProjectListProfile from "./components/profile/ProjectsListProfile";
import BaseSettingsProfile from "./components/profile/BaseSettingsProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navigate replace to="/auth/signin" />}/>
        <Route path="/explore" element={<NotFoundPage />} />

        <Route path="/:username" element={<UserProfilePage />} >
          <Route index element={<Navigate replace to="project" />}/>
          <Route path="project" element={<ProjectListProfile />} >
            <Route index element={<ProjectListProfile />} />
            <Route path="home" element={<ProjectListProfile />} />
            <Route path="member" element={<ProjectListProfile />} />
            <Route path="star" element={<ProjectListProfile />} />
          </Route>
          <Route path="groups" element={<NotFoundPage />}/>
          <Route path="settings" element={<BaseSettingsProfile />}/>
        </Route>

        <Route path="/:username/:boardname" element={<BoardPage />} />

        <Route path="/auth" element={<AuthPage />}>
          <Route path="signin" element={<SignInAuth />} />
          <Route path="signup" element={<SignUpAuth />} />
          <Route path="forgot" element={<SignInAuth />} />
          <Route path="logout" element={<SignInAuth />} />
          <Route path="*" element={<Navigate replace to="signin" />} />
        </Route>

        <Route path="*" element={<NotFoundPage />}/>

      </Routes>
  </BrowserRouter>
  );
}

export default App;
