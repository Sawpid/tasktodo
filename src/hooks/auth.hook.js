import { useCallback, useState, useEffect } from 'react';
import { baseUserMask } from '../model/authMaskData';

const storageName = 'userData'

export const useLogin = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)
  const [username, setUsername] = useState(null)

  const login = useCallback((jwtToken, id, name) => {
    setToken(jwtToken)
    setUsername(name)
    setUserId(id)

    localStorage.setItem(storageName, JSON.stringify({
      name: name, userId: id, token: jwtToken
    }))
  }, [])


  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setUsername(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.token) {
      login(data.token, data.userId, data.name)
    }
    setReady(true)
  }, [login])


  return { login, logout, token, userId, username, ready }
}


export const useAuth = () => {

    const [baseUser, setBaseUser] = useState(baseUserMask)

    const updateUser = (e) => {

        e.persist();

        let invalid = false; 
        let valid = false;

        if (baseUser[e.target.name].mask.test(e.target.value)){
            valid = true;
            invalid = false;
        }else{
            valid = false;
            invalid = true;
        }
        
        setBaseUser(prev => ({ 
            ...prev, 
            [e.target.name]: {
                ...prev[e.target.name],
                value: e.target.value,
                isValid: valid,
                isInvalid: invalid,
            }
        }));
    }

    return [
        baseUser,
        updateUser
    ]
}