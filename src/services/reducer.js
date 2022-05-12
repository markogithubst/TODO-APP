import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_COMPLETED } from "./actions";

export function reducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                  id: action.id,
                  text: action.text,
                  completed: false,
                },
              ];
        case TOGGLE_TODO:
            return state.map(todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id);
        case REMOVE_ALL_COMPLETED:
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
}