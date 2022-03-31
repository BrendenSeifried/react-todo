import { checkError, client } from './client';

export async function fetchToDo() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}


export function getUser() {
  return client.auth.session() && client.auth.session().user.email;
}

export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logout() {
  const response = await client.auth.signOut();
  return checkError(response);
}