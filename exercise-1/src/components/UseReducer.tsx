import React, { useState, useEffect, useReducer } from 'react';

// Reducer function for handling the state transitions
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, posts: action.payload, error: '' };
    case 'FETCH_ERROR':
      return { ...state, loading: false, posts: [], error: action.payload };
    default:
      return { ...state, loading: false };
  }
}

function PostListReducer() {
  const [state, dispatch] = useReducer(reducer, { posts: [], loading: true, error: '' });

  // State management with useState could still be used here for other state variables if needed
  // const [otherState, setOtherState] = useState(initialOtherState);

  useEffect(() => {
    // Here, we could use setState from useState to handle simple state transitions
    // setOtherState(updatedValue);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      });
  }, []);

  return (
    <div className="PostList componentBox">
      {state.loading ? <div>Loading posts...</div> : (
        state.posts.map(post => (
          <div className="post" key={post.id}>
            <h3>Post #{post.id}: {post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
      {state.error && <div className="error">{state.error}</div>}
    </div>
  );
}

export default PostListReducer;