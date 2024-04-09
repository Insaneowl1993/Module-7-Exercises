// app/posts/error.jsx
import { useEffect } from 'react';

// Error component for handling and displaying errors
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      {/* Attempt to recover by trying to re-render the segment */}
      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}