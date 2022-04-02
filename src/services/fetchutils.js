import { checkError, client } from './client';

export async function fetchToDo() {
  const resp = await client.from('todos').select('*').order('id', { ascending: true });
  return checkError(resp);
}
'id', { ascending: false };

export async function createTodo(item) {
  const resp = await client.from('todos').insert(item).single();
  return checkError(resp);
}


export async function changeToDo(done){
  const resp = await client.from('todos').update(done).match({ id: done.id }).single();
  return checkError(resp);
}




////////Sign in and sign out functions for users///////////


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

