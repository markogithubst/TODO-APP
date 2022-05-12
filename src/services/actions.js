import uniqueString from 'unique-string';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_ALL_COMPLETED = 'REMOVE_ALL_COMPLETED';

export function addTodo(text) {
  return { type: ADD_TODO, id: uniqueString(), text };
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}

export function removeAllCompletedTodos() {
  return { type: REMOVE_ALL_COMPLETED };
}