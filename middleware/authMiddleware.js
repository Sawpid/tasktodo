import 'dotenv/config' 
import jwt from 'jsonwebtoken';

export const authMiddle  = (request, response, next) => {
  if (request.method === 'OPTIONS') {
    return next()
  }

  try {

    const token = request.headers.authorization.split(' ')[1] // "Bearer TOKEN"

    if (!token) {
      return response.status(401).json({ message: 'Не авторизован' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    request.user = decoded
    next()

  } catch (e) {
    response.status(401).json({ message: 'Не авторизован' })
  }
}
