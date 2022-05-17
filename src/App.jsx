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
import { useLogin } from "./hooks/auth.hook";
import { LoginContext, MessageContext } from "./hooks/context.hook";
import LogOutPage from "./pages/AuthPage/LogOutPage";
import { useToast } from "./hooks/message.hook";

function App() {
  const login = useLogin()
  const toast = useToast()
  const isLogin = !!login.token
  return (
    <LoginContext.Provider value={login}>
      <MessageContext.Provider value={toast}>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Navigate replace to="/auth/signin" />}/>

            {(isLogin)
              ?<>
                <Route path="/auth">
                  <Route path="logout" element={<LogOutPage />} />
                  <Route index path="*" element={<Navigate replace to={`/${login.username}`} />} />
                </Route>

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
              </>
              :<>
                <Route path="/auth" element={<AuthPage />}>
                  <Route path="signin" element={<SignInAuth />} />
                  <Route path="signup" element={<SignUpAuth />} />
                  <Route path="forgot" element={<SignInAuth />} />
                  <Route path="*" element={<Navigate replace to="signin" />} />
                </Route>
              </>
            }


          <Route path="*" element={<NotFoundPage />}/>

        </Routes>
      </BrowserRouter>
      </MessageContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
