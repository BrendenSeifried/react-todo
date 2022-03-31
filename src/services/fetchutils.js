import { checkError, client } from './client';

export async function fetchToDo() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}