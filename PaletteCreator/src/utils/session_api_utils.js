export const signup = (user) => {
  let username = user.username;
  let password = user.password;

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
  let username = user.username;
  let password = user.password;

  return fetch(`api/session/`, {
    method: 'POST',
    body: JSON.stringify(user)
  })
}
