import React, { useReducer } from 'react';

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.text, completed: false }];
    case 'toggle':
      return state.map((todo, idx) =>
        idx === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = React.useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'add', text });
    setText('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {state.map((todo, index) => (
          <li
            key={index}
            onClick={() => dispatch({ type: 'toggle', index })}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;