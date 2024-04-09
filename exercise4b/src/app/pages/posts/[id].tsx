// pages/posts/[id].jsx
import Link from "next/link";

// Function to fetch post data by ID
async function getPostData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/` + id);

  if (!res.ok) {
    throw new Error('Failed to fetch post #' + id);
  }

  return res.json();
}

// The Post component uses the `params` prop to get the value of `[id]` from the path segment
export default function Post({ params }) {
  const [post, setPost] = React.useState(null);

  // Using useEffect to call the getPostData function when the component mounts.
  React.useEffect(() => {
    getPostData(params.id)
      .then(data => {
        setPost(data); // Setting the post in state.
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, [params.id]);

  // Render the post or loading text
  return (
    <div className="post">
      {post ? (
        <>
          <h3>Post #{post.id}: {post.title}</h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
      <Link href="/posts">All Posts</Link>
      {/* You can add Next/Previous Post links here */}
    </div>
  );
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export async function getServerSideProps({ params }) {
  // Pass post data to the page via props
  return { props: { params } };
}