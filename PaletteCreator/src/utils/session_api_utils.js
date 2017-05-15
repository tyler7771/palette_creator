export const signup = (user) => {

  return fetch('api/users', {
    method: 'POST',
    body: JSON.stringify(user)
  })
}

export const logout = () => {
  return fetch('api/session', {
    method: 'DELETE'
  })
}

export const login = (user) => {

  return fetch(`api/session/`, {
    method: 'POST',
    body: JSON.stringify(user)
  })
}
