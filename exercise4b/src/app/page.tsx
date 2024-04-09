import Link from "next/link";

// This function fetches data from the JSON Placeholder API.
async function getPostsData(limit = 5, page = 1) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  
  if (!res.ok) {
    // If the response is not ok, throw an error.
    throw new Error('Failed to fetch posts');
  }
  
  // Return the JSON response.
  return res.json();
}

// This is the React component that will display the posts.
export default function Posts() {
  const [posts, setPosts] = React.useState([]);

  // Using useEffect to call the getPostsData function when the component mounts.
  React.useEffect(() => {
    getPostsData()
      .then(data => {
        setPosts(data); // Setting the posts in state.
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // Mapping through the posts and displaying them in a list.
  const postList = posts.map(post => (
    <li key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <a>Post #{post.id}: {post.title}</a>
      </Link>
    </li>
  ));

  // The rendered component with a list of posts.
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <ul>{postList}</ul>
    </div>
  );
}