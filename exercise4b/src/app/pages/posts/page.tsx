// pages/posts/page.jsx or pages/posts/index.jsx
import PostsLimit from '../../components/PostsLimit'; // Adjust the import path as needed
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Page component to display a list of posts
export default async function Posts() {
  const searchParams = useSearchParams();
  
  // Set the limit of posts to display based on searchParams or use a default
  const limit = searchParams.limit ? parseInt(searchParams.limit, 10) : 5;

  // Fetch posts data with the specified limit
  const posts = await getPostsData(limit);

  // Map through the fetched posts and prepare list items
  const postList = posts.map(post => (
    <li key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <a>Post #{post.id}: {post.title}</a>
      </Link>
    </li>
  ));

  return (
    <div className="Posts">
      <h1>Posts</h1>
      <ul>{postList}</ul>
      <PostsLimit defaultLimit={limit} />
    </div>
  );
}

// Function to fetch post data with the specified limit
async function getPostsData(limit) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}
