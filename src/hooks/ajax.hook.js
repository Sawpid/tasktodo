import {useState, useCallback, useContext} from 'react'
import { LoginContext } from './context.hook'

export const useAjax = () => {
  const authContext = useContext(LoginContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true)
      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }
        if (!!authContext.token){
          headers['Authorization'] = `Bearer ${authContext.token}`
        }

        const response = await fetch(url, {method, body, headers})
        const data = await response.json()
        
        setLoading(false)
        
        return data
      } catch (e) {
        setLoading(false)
        setError(e.message)
      }
    },
    [],
  )

  const clear = useCallback(() => setError(null), [])

  return {loading, request, error, clear }
}
